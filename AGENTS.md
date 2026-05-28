# AGENTS.md

Implementation details beyond this product specification live in `AGENTS-Implementation.md`.
From now on, new implementation-specific guidance should be added there.
Use both `AGENTS.md` and `AGENTS-Implementation.md` as reference for documentation and code generation.

## Mobile Debugging

Android/mobile debugging workflows are documented separately in `docs/android-debugging.md`.

This project prefers real-device validation for camera and barcode/QR scanning functionality. Do not rely solely on desktop emulation for camera or scan behavior.

# BookDonationRegistry — Full Project Specification

## 1. Project Purpose

BookDonationRegistry is a multilingual, AI-assisted book donation, inventory, and academic heritage platform.

Its first practical purpose is simple:

> Help people avoid throwing away valuable educational and academic books by making cataloging, donation review, and storage retrieval practical.

The project is motivated by real-world collections of serious study books, textbooks, technical books, university materials, and academic references that are often in good condition but unused, taking space, gathering dust, and at risk of being discarded.

The system should help donors create useful inventories, allow libraries to decide what they want, and help donors find selected books in storage.

Long term, the system may become useful for libraries, universities, archives, NGOs, and regional educational heritage preservation.

Primary geographic and cultural context:

- Slovenia
- former Yugoslav countries
- Balkan region
- multilingual book collections
- older academic and technical books
- university/professor/course-linked materials
- books in Slovenian, Croatian, Serbian Latin, Serbian Cyrillic, Bosnian, Macedonian, English, German, French, Russian, and other languages

The application should be designed so that it could eventually be self-hosted by a private donor, hosted for a small group, or possibly hosted by a library network or institution such as IZUM if such interest ever exists.

---

## 2. Core Philosophy

### 2.1 Manual Workflow Must Work Without AI

The application must be useful even if all paid AI services are disabled.

Core functionality must support:

- manual book entry
- photo upload
- location tracking
- Excel export
- Excel import
- library decision tracking
- pick lists
- delivery tracking

AI services are enhancement layers, not hard dependencies.

### 2.2 Separate Physical Copies From Bibliographic Records

A bibliographic record is not the same thing as a physical book.

Example:

- one calculus textbook edition
- five physical copies
- each in different condition
- each in different box
- possibly each requested differently

This distinction is central to the design.

### 2.3 Treat AI Output as Suggestions

OCR, metadata matching, condition detection, translation, and classification are probabilistic.

Every AI-generated result should track:

- source
- confidence
- timestamp
- whether it was reviewed
- who reviewed it
- whether it was accepted, edited, or rejected

The UI must avoid presenting uncertain AI results as facts.

### 2.4 Excel Import/Export Is First-Class

Libraries may not want accounts.

The MVP must support Excel-based review:

1. donor exports book list
2. library marks wanted/maybe/not wanted
3. donor imports decisions
4. app generates pick list grouped by storage location

### 2.5 Design Multi-Tenant From Day One

Even if first deployment is private, the system should support future use by:

- donors
- families
- libraries
- university libraries
- school libraries
- archives
- NGOs
- reviewers
- translators
- metadata editors
- regional administrators

### 2.6 `.po` Files Are for App Localization Only

Use gettext `.po` files for application UI localization.

Do not use `.po` files for book metadata, book descriptions, summaries, OCR text, donor comments, or library comments.

Book metadata translations belong in the database.

### 2.7 Preserve Provenance

The system must track where metadata came from:

- human entry
- OCR
- Open Library
- Google Books
- COBISS, if later available
- Crossref
- OpenAlex
- Wikidata
- ORCID
- university repository
- imported Excel
- AI enrichment

Libraries and archives care about provenance.

### 2.8 Optimize for Storage Logistics

The practical problem is not only cataloging books.

The system must help answer:

- Where is this book?
- Which box is it in?
- Which books did the library want?
- Which books have been picked?
- Which books were delivered?
- Which books were rejected?
- Which books are still taking space?

Storage workflow is a first-class requirement.

---

## 3. Proposed Technology Stack

### 3.1 Application

Use:

- .NET latest stable LTS or current stable
- Blazor Web App
- ASP.NET Core
- PostgreSQL
- Entity Framework Core
- Google OpenID Connect login
- Azure Blob Storage or compatible object storage for photos
- Azure App Service, Azure Container Apps, or containerized self-hosting

Prefer PostgreSQL over Azure SQL because PostgreSQL has strong support for:

- JSONB metadata
- full-text search
- trigram similarity
- accent-insensitive search
- flexible future self-hosting
- useful extensions such as `pg_trgm` and `unaccent`

### 3.2 Authentication

Initial authentication:

### 3.2.1 External Authentication Providers

Authentication must support multiple external providers.

Initial MVP provider:
- Google OpenID Connect

Architecture must allow future providers:
- Microsoft
- Apple ID
- Facebook
- email magic link authentication

Authorization must remain application-managed.

External identity alone must not grant access.

Use internal authorization through:
- ApprovedLogin
- TenantMembership
- Role assignments

Recommended model:

```text
ExternalLogin
- UserId
- Provider
  - Google
  - Microsoft
  - Apple
  - Facebook
  - MagicLink
- ProviderSubjectId
- Email
- EmailVerified
- CreatedAt
```

Microsoft/Entra ID support is important for institutional and library users.


- Google OpenID Connect
- restrict access to pre-approved Gmail addresses
- use application-level allowlist table
- login alone is not authorization

Long-term authentication:

- users can belong to multiple tenants
- libraries can have multiple users
- donors can invite reviewers
- role-based authorization

### 3.3 Storage

Use object/blob storage for:

- original photos
- display-size photos
- thumbnails
- OCR region crops, if later needed
- exported Excel files, if archived
- generated reports, if archived

Never store image binaries directly in the relational database except possibly tiny thumbnails if explicitly justified.


### 3.3.1 Object Storage Provider Strategy

Object/blob storage must be provider-agnostic.

Initial preferred providers:
- Azure Blob Storage
- Amazon S3
- S3-compatible storage

Supported S3-compatible examples:
- MinIO
- Cloudflare R2
- Wasabi
- Backblaze B2
- self-hosted object storage

Use abstraction interfaces.

Recommended interface:

```csharp
public interface IObjectStorageService
{
    Task<StoredObject> UploadAsync(Stream stream, string contentType, string path, CancellationToken ct);
    Task<Stream> OpenReadAsync(string objectKey, CancellationToken ct);
    Task DeleteAsync(string objectKey, CancellationToken ct);
    Task<Uri> CreateReadUrlAsync(string objectKey, TimeSpan expiresIn, CancellationToken ct);
}
```

Store logical object references in database:

```text
ObjectKey
StorageProvider
ContentType
SizeBytes
Checksum
PublicDisplayUrl nullable
```

Do not use permanent provider URLs as primary references.
Use logical object keys so storage providers may be changed later.

### 3.4 AI and External Services


### 3.4.1 AI/OCR Provider Strategy

Initial implementation should target Azure services:

- Azure AI Vision OCR
- Azure Document Intelligence
- Azure Translator
- Azure OpenAI later if required

However, AI/OCR architecture must remain provider-agnostic.

Define interfaces such as:

```text
IOcrService
ITranslationService
IBookMetadataEnrichmentService
IConditionAssessmentService
IEmbeddingSearchService
```

Do not call Azure services directly from UI or domain layers.

Example implementations:

```text
AzureOcrService
AzureTranslationService
AzureBookMetadataService
NoOpOcrService
NoOpTranslationService
```

Future providers may include:

- IZUM-preferred infrastructure
- on-premise OCR
- open-source OCR
- institution-hosted LLMs
- national library infrastructure

All AI/OCR outputs must track:

```text
Provider
ModelName
ModelVersion nullable
Confidence
RawResult
NormalizedResult
CreatedAt
```

Optional integrations:

- Open Library
- Google Books
- Azure AI Vision OCR or Azure Document Intelligence
- Azure Translator
- Crossref
- OpenAlex
- Wikidata
- ORCID

Possible future integration:

- COBISS / IZUM if permitted by their access rules or agreement

Do not hardcode any external catalog as mandatory.

---

## 4. Repository Structure

Target repository layout:

```text
BookDonationRegistry/
  src/
    BookDonationRegistry.Web/
    BookDonationRegistry.Application/
    BookDonationRegistry.Domain/
    BookDonationRegistry.Infrastructure/
    BookDonationRegistry.Migrations/

  tests/
    BookDonationRegistry.Domain.Tests/
    BookDonationRegistry.Application.Tests/
    BookDonationRegistry.Infrastructure.Tests/
    BookDonationRegistry.Web.Tests/
    BookDonationRegistry.E2E.Tests/

  docs/
    en/
      index.md
      getting-started.md
      donor-tutorial.md
      library-reviewer-tutorial.md
      excel-import-export.md
      localization.md
      deployment-azure.md
      architecture.md
      ai-enrichment.md
      storage-workflows.md
      security.md

    sl/
      index.md
      getting-started.md
      donor-tutorial.md
      library-reviewer-tutorial.md
      excel-import-export.md

    hr/
      index.md

    bs/
      index.md

    sr-Latn/
      index.md

    sr-Cyrl/
      index.md

    mk/
      index.md

    sq/
      index.md

    de/
      index.md

    it/
      index.md

    fr/
      index.md

    es/
      index.md

  localization/
    en/messages.po
    sl/messages.po
    hr/messages.po
    bs/messages.po
    sr-Latn/messages.po
    sr-Cyrl/messages.po
    mk/messages.po
    sq/messages.po
    de/messages.po
    it/messages.po
    fr/messages.po
    es/messages.po

  samples/
    excel/
      donation-list-template.xlsx
      library-decisions-example.xlsx

  tools/
    po-check/
    excel-schema-check/

  .github/
    workflows/
      ci.yml
      docs.yml

  README.md
  AGENTS.md
  CONTRIBUTING.md
  LICENSE
  SECURITY.md
  CODE_OF_CONDUCT.md
```

---

## 5. Domain Model

### 5.1 Tenant

A tenant represents an organization or collection owner.

Examples:

- private donor
- family
- local library
- university library
- school
- NGO
- archive
- public institution
- regional operator

Fields:

```text
Tenant
- Id
- Name
- Type
  - DonorPrivate
  - DonorOrganization
  - Library
  - UniversityLibrary
  - SchoolLibrary
  - School
  - University
  - NGO
  - Archive
  - RegionalOperator
  - Other
- CountryCode
- RegionCode nullable
- DefaultCulture
- IsVerifiedInstitution
- CreatedAt
- UpdatedAt
```

### 5.2 User

```text
AppUser
- Id
- Email
- DisplayName
- ExternalProvider
- ExternalSubjectId
- IsEnabled
- PreferredCulture
- CreatedAt
- UpdatedAt
```

### 5.3 Tenant Membership

```text
TenantMembership
- Id
- TenantId
- UserId
- Role
  - Owner
  - Admin
  - Contributor
  - Reviewer
  - Viewer
  - MetadataReviewer
  - Translator
  - RegionalAdmin
- CreatedAt
```

A user may belong to multiple tenants.

### 5.4 Approved Login

For private deployments and MVP access control:

```text
ApprovedLogin
- Id
- Email
- InvitedByUserId nullable
- IsEnabled
- CreatedAt
```

Only approved emails may use the application in private mode.

### 5.5 Storage Location

Storage must support hierarchy.

Examples:

- House / Basement / Shelf 2 / Box 14
- Storage Locker A / Row B / Box 7
- Office / Cabinet 3 / Box MATH-1990

```text
StorageLocation
- Id
- TenantId
- ParentLocationId nullable
- Type
  - Building
  - Room
  - Shelf
  - Box
  - Locker
  - Cabinet
  - Pallet
  - Other
- Code
- Name
- Description
- SortOrder
- IsActive
- CreatedAt
- UpdatedAt
```

### 5.6 Bibliographic Record

Represents a work, edition, or catalogable bibliographic entity.

```text
BibliographicRecord
- Id
- RecordLevel
  - Work
  - Edition
  - Unknown
- PrimaryTitle
- Subtitle nullable
- OriginalLanguageCode nullable
- ISBN10 nullable
- ISBN13 nullable
- Publisher nullable
- PublishedYear nullable
- PublishedDateText nullable
- EditionText nullable
- PageCount nullable
- DescriptionOriginal nullable
- SubjectsOriginal nullable
- CreatedAt
- UpdatedAt
```

The model should allow incomplete data.

Do not require ISBN.

### 5.7 Physical Book Copy

Represents one real book.

```text
PhysicalBookCopy
- Id
- TenantId
- BibliographicRecordId nullable
- StorageLocationId nullable
- LocalSequence nullable
- LocalCode
- IntakeMode
  - Quick
  - Detailed
  - Imported
- ConditionFinal
  - Unknown
  - LikeNew
  - Good
  - Acceptable
  - Poor
  - DiscardReview
- ConditionSuggested nullable
- ConditionConfidence nullable
- DonationStatus
  - Draft
  - AvailableForReview
  - Offered
  - Requested
  - Reserved
  - Picked
  - Packed
  - Delivered
  - Rejected
  - Archived
  - Withdrawn
  - Lost
  - Disposed
- PrivateNotes nullable
- PublicNotes nullable
- CreatedAt
- UpdatedAt
```

### 5.8 Book Photo

Photos are archival assets and should be preserved.

```text
BookPhoto
- Id
- PhysicalBookCopyId
- BlobUri
- DisplayUri
- ThumbnailUri
- Type
  - Cover
  - BackCover
  - TitlePage
  - CopyrightPage
  - Spine
  - TableOfContents
  - ConditionDetail
  - StampOrInscription
  - Other
- PerceptualHash nullable
- Width nullable
- Height nullable
- UploadedAt
```

Store:

- original image
- compressed display version
- thumbnail
- perceptual hash for duplicate photo detection

Strip EXIF metadata from public/display versions.

### 5.9 OCR Result

```text
OcrResult
- Id
- PhotoId
- Engine
- LanguageHints nullable
- RawText
- CleanedText nullable
- AverageConfidence nullable
- CreatedAt
```

Keep raw OCR permanently unless deleted for privacy/legal reasons.

Future models may extract more value from old OCR and photos.

### 5.10 External Catalog Source

```text
ExternalCatalogSource
- Id
- Code
  - OpenLibrary
  - GoogleBooks
  - COBISS
  - Crossref
  - OpenAlex
  - Wikidata
  - ORCID
  - WorldCat
  - UniversityRepository
  - Other
- Name
- BaseUrl nullable
- TermsNotes nullable
```

### 5.11 External Catalog Match

```text
ExternalCatalogMatch
- Id
- BibliographicRecordId nullable
- PhysicalBookCopyId nullable
- SourceId
- ExternalId nullable
- Url nullable
- Confidence
- MatchStatus
  - Suggested
  - Confirmed
  - Rejected
- ImportedMetadataJson
- CreatedAt
- ReviewedByUserId nullable
- ReviewedAt nullable
```

### 5.12 Book Localized Text

Use database records for book metadata translations.

Do not use `.po` for book metadata.

```text
BookLocalizedText
- Id
- BibliographicRecordId
- Field
  - Title
  - Subtitle
  - Description
  - Subjects
  - Notes
- LanguageCode
- Text
- Source
  - Human
  - AI
  - Imported
- QualityStatus
  - Draft
  - MachineGenerated
  - HumanReviewed
  - Approved
  - Rejected
- ReviewedByUserId nullable
- ReviewedAt nullable
- CreatedAt
- UpdatedAt
```

### 5.13 Donation Batch

A batch is a group of books being prepared for review or donation.

```text
DonationBatch
- Id
- TenantId
- Name
- Description nullable
- Status
  - Draft
  - ReadyForReview
  - SentToLibrary
  - InReview
  - DecisionsImported
  - Picking
  - Completed
  - Cancelled
- CreatedAt
- UpdatedAt
```

### 5.14 Donation Batch Item

```text
DonationBatchItem
- Id
- DonationBatchId
- PhysicalBookCopyId
- SortOrder
```

### 5.15 Library Review Decision

```text
LibraryReviewDecision
- Id
- DonationBatchId
- PhysicalBookCopyId
- LibraryTenantId nullable
- Decision
  - Wanted
  - NotWanted
  - Maybe
- Priority nullable
- QuantityWanted nullable
- Comment nullable
- DecidedByUserId nullable
- DecidedAt nullable
```

### 5.16 Event History

The system should log major workflow events.

```text
BookEvent
- Id
- PhysicalBookCopyId nullable
- DonationBatchId nullable
- EventType
  - Created
  - PhotoUploaded
  - OcrCompleted
  - MetadataMatched
  - MetadataConfirmed
  - Offered
  - Requested
  - Reserved
  - Picked
  - Packed
  - Delivered
  - Rejected
  - Archived
  - Withdrawn
- ActorUserId nullable
- EventDataJson nullable
- CreatedAt
```

---

## 6. Academic Heritage Model

This is not required for the MVP but should be supported later.

### 6.1 Person

Represents authors, professors, translators, editors, donors, or historically relevant people.

```text
Person
- Id
- DisplayName
- NormalizedName
- BirthYear nullable
- DeathYear nullable
- ORCID nullable
- WikidataId nullable
- COBISSAuthorId nullable
- Notes nullable
```

### 6.2 Institution

```text
Institution
- Id
- Name
- CountryCode
- City nullable
- Type
  - University
  - Faculty
  - Department
  - School
  - Library
  - Archive
  - Publisher
  - Other
- ExternalIdsJson nullable
```

### 6.3 Course

```text
Course
- Id
- InstitutionId
- Name
- StudyProgram nullable
- ApproxPeriod nullable
- Notes nullable
```

### 6.4 Book Association

```text
BookAssociation
- Id
- BibliographicRecordId
- AssociationType
  - AuthoredBy
  - EditedBy
  - TranslatedBy
  - UsedInCourse
  - RecommendedByProfessor
  - DonatedBy
  - OwnedByInstitution
  - FormerLibraryHolding
  - MentionedInBibliography
- PersonId nullable
- InstitutionId nullable
- CourseId nullable
- Confidence nullable
- Source
  - HumanMemory
  - BookInscription
  - LibraryStamp
  - OCR
  - ExternalCatalog
  - Bibliography
  - UniversityRepository
  - Other
- Notes nullable
- CreatedAt
```

Important distinction:

- bibliographic facts
- community or historical annotations

Do not mix them without provenance.

---

## 7. MVP Scope

### 7.1 Phase 1 — Manual Inventory and Excel

Must include:

- Google login
- approved email allowlist
- tenant model
- user membership
- storage locations
- add/edit physical book copies
- manual bibliographic data entry
- upload photos
- Excel export for library review
- Excel import for library decisions
- pick list grouped by storage location
- basic `.po` localization
- basic automated tests
- CI workflow

No AI required in Phase 1.

### 7.2 Phase 2 — ISBN and Metadata Lookup

Add:

- ISBN-10 and ISBN-13 normalization
- barcode/ISBN manual entry
- Open Library lookup
- Google Books lookup
- source provenance
- candidate match screen
- confidence scoring
- manual confirmation

### 7.3 Phase 3 — OCR and Fuzzy Matching

Add:

- OCR for cover/title/copyright pages
- extraction of candidate title, author, publisher, year, edition, ISBN
- fuzzy search without ISBN
- top 3–5 candidate matches
- unmatched book review queue
- confidence explanations

### 7.4 Phase 4 — Library Reviewer Portal

Add:

- reviewer accounts
- library tenant role
- read-only donation batch review
- wanted/maybe/not wanted decisions
- reviewer comments
- export selected books
- donor approval workflow

### 7.5 Phase 5 — Regional Feed and Public Interest

Add:

- donation offer feed
- local/country/regional visibility
- multiple library interest
- donor allocation decisions
- private individual expressions of interest
- no in-app transactions

### 7.6 Phase 6 — Academic Heritage

Add:

- people/professors
- institutions
- courses
- bibliographies
- links to ORCID, Wikidata, OpenAlex, COBISS author records if permitted
- human-reviewed historical annotations

---

## 8. Workflows

### 8.1 Quick Intake Mode

For large collections.

Goal: capture a book in seconds.

```text
Select location
Take cover photo
Enter/scan ISBN if visible
Save
Move to next book
```

The system may enrich later.

### 8.2 Detailed Intake Mode

```text
Select location
Take cover photo
Take title page photo
Take copyright page photo
Take spine/condition photos
Run OCR if enabled
Detect ISBN/title/author
Lookup metadata
Show candidate matches
User confirms or creates manual record
Set condition
Save
```

### 8.3 Library Excel Review

```text
Donor creates donation batch
Donor exports Excel
Library reviews Excel
Library marks Wanted/Maybe/NotWanted
Library adds comments
Donor imports Excel
System validates ItemId values
System updates decisions
System generates pick list
```

### 8.4 Pick List Workflow

```text
Show requested books grouped by:
Room → Shelf → Box → Sequence

User marks:
Picked
Packed
Delivered
Missing
Rejected after inspection
```

### 8.5 Offer Feed Workflow

Future feature.

```text
Donor publishes donation offer
Local library gets first review window
If not claimed, donor may widen visibility
Other libraries express interest
Donor allocates books
System generates packing/pick lists
```

### 8.6 Private Individual Interest

Future feature.

Private individuals may express interest only when offer visibility allows it.

The application must not handle:

- payment
- shipping
- escrow
- legal transfer
- disputes
- ratings
- marketplace transactions

The app may collect expressions of interest and let donor decide whether to contact the person outside the platform.

---

## 9. Donation Offer Feed

### 9.1 Purpose

Allow multiple libraries, and possibly later private individuals, to discover available books.

Use case:

```text
Local library is not interested.
A university library, specialist library, archive, NGO, or private individual may be interested.
```

### 9.2 Donation Offer

```text
DonationOffer
- Id
- DonorTenantId
- DonationBatchId
- Title
- Description
- Visibility
  - Private
  - InvitedLibraries
  - LibrariesInCountry
  - LibrariesInRegion
  - PublicInstitutions
  - PublicIncludingPrivateIndividuals
- CountryScope nullable
- RegionScope nullable
- LanguageScope nullable
- SubjectScope nullable
- LocalFirstReviewUntil nullable
- ExpiresAt nullable
- Status
  - Draft
  - Published
  - Paused
  - Closed
  - Expired
  - Withdrawn
- CreatedAt
- UpdatedAt
```

### 9.3 Library Interest

```text
LibraryInterest
- Id
- OfferId
- LibraryTenantId
- PhysicalBookCopyId nullable
- Interest
  - Wanted
  - Maybe
  - NotInterested
- Priority nullable
- RequestedQuantity nullable
- Comment nullable
- Status
  - New
  - AcceptedByDonor
  - RejectedByDonor
  - Withdrawn
  - Fulfilled
- CreatedAt
- UpdatedAt
```

### 9.4 Private Interest

```text
PrivateInterest
- Id
- OfferId
- PhysicalBookCopyId nullable
- PersonName
- Email
- Country nullable
- Message nullable
- InterestStatus
  - New
  - SharedWithDonor
  - AcceptedExternally
  - Rejected
  - Closed
- CreatedAt
- UpdatedAt
```

### 9.5 Feed Privacy Rules

- Do not expose donor home address.
- Do not expose exact storage location.
- Do not expose private notes.
- Do not expose full-resolution photos unless explicitly allowed.
- Library users see only published offer metadata.
- Private individuals see less than verified libraries.
- Donor controls contact and allocation.
- Transactions and logistics happen outside the app unless later explicitly designed otherwise.

---

## 10. Excel Export and Import

### 10.1 Export Columns

Recommended columns:

```text
ItemId
LocalCode
Room
Shelf
Box
BoxSequence
Title
Subtitle
Author
Publisher
Year
Edition
ISBN10
ISBN13
Language
Condition
DescriptionEN
DescriptionSL
SourceLinks
CoverPhotoLink
WantedStatus
QuantityWanted
LibraryComment
Picked
Delivered
```

### 10.2 Editable Library Columns

Libraries may edit:

```text
WantedStatus
QuantityWanted
LibraryComment
```

Optionally:

```text
Priority
```

### 10.3 Import Rules

- `ItemId` is mandatory.
- `ItemId` must be stable and unique.
- Do not match by title.
- Validate all rows before applying changes.
- Report unknown ItemIds.
- Report duplicate ItemIds.
- Report invalid statuses.
- Do not overwrite donor private fields.
- Keep import audit history.

### 10.4 Excel Implementation

Use a reliable .NET Excel library compatible with project licensing.

Export should include:

- frozen header
- filters
- readable column widths
- protected non-editable columns if practical
- data validation for decision statuses
- instructions sheet

---

## 11. Localization

### 11.1 UI Localization

Use gettext `.po` files for application UI only.

Examples:

```text
localization/
  en/messages.po
  sl/messages.po
  hr/messages.po
  bs/messages.po
  sr-Latn/messages.po
  sr-Cyrl/messages.po
  mk/messages.po
  sq/messages.po
  de/messages.po
  it/messages.po
  fr/messages.po
  es/messages.po
```

Serious institutional/public deployment language set:

- Required: `en`, `sl`, `hr`, `bs`, `sr-Latn`, `sr-Cyrl`, `mk`, `sq`, `de`, `it`, `fr`
- Optional: `es`

All user-visible text must be localizable except protected trademarks and brand names.
Serbian Latin and Serbian Cyrillic must be treated as separate locales, not as a simple script switch.
Use stable localization keys rather than source text as identifiers.

Use stable semantic keys rather than long English sentences.

Example:

```po
msgid "Books.List.Title"
msgstr "Knjige"

msgid "Books.Actions.ExportExcel"
msgstr "Izvozi Excel"

msgid "DonationStatus.Wanted"
msgstr "Želeno"
```

### 11.2 What Belongs in `.po`

Use `.po` for:

- menus
- buttons
- page titles
- validation errors
- enum display names
- system messages
- Excel column labels
- email template UI text
- help text

### 11.3 What Does Not Belong in `.po`

Do not use `.po` for:

- book titles
- book descriptions
- OCR text
- catalog summaries
- donor notes
- library comments
- academic annotations
- user-generated content

These belong in the database.

### 11.4 AI-Generated App Localization

AI may generate draft `.po` files.

Human review should be required before release.

The app should provide tooling or scripts to:

- check missing keys
- detect obsolete keys
- validate placeholders
- validate plural forms if used
- compare cultures

### 11.5 Localization Coverage Requirements

Localization support must cover:

- UI text
- validation messages
- dialogs
- notifications and toasts
- menus
- onboarding and tutorials
- exported documents
- generated HTML/PDF reports
- emails
- accessibility labels and ARIA text
- accessibility descriptions
- alt text
- form labels
- validation announcements
- status messages
- error messages
- offline/PWA content

Also ensure:

- locale-aware formatting for dates, times, numbers, currencies, and pluralization
- Unicode-safe rendering and storage throughout the application
- responsive layouts tolerate longer translations
- screenshots/tutorial generation and Playwright/UI regression workflows can execute under multiple locales
- language selection is independent from country selection
- future RTL-safe layout architecture where feasible, even if no RTL locale is currently enabled
- keyboard navigation remains fully usable across localized layouts
- translated text does not break focus order, tab navigation, modal accessibility, or responsive/mobile accessibility
- dynamically updated UI content announces changes correctly to assistive technologies
- generated documents remain accessible where supported by tooling
- sufficient color contrast is preserved regardless of language length or layout changes
- meaningful text is not replaced by unlabeled icons
- critical text is not embedded inside images or screenshots
- localization does not remove semantic HTML structure or accessibility metadata
- Playwright/UI regression tests include accessibility checks where feasible
- accessibility validation covers both Latin and Cyrillic locales
- fonts remain readable and accessible across supported scripts

### 11.6 Language and Unicode Correctness

Requirements:

- use proper native orthography and Unicode characters for each language
- never substitute ASCII approximations for native characters
- Slovenian must preserve `č`, `ž`, `š`
- Serbian Latin must preserve `č`, `ć`, `đ`, `ž`, `š`
- Serbian Cyrillic must use proper Serbian Cyrillic
- Macedonian Cyrillic must use proper Macedonian orthography and must not be treated as identical to Serbian or Bulgarian Cyrillic
- Macedonian support must preserve `ѓ`, `ќ`, `ѕ`, `љ`, `њ`, `џ`, `ј`
- Albanian must preserve `ë`, `ç`
- preserve Bosnian/Croatian/Serbian Latin distinctions where translations differ
- avoid transliterated fallback text in production UI
- do not auto-convert Serbian Cyrillic/Latin or Macedonian Cyrillic unless explicitly validated for linguistic correctness
- preserve Unicode fidelity across localization files, APIs, databases, exports, logs, generated HTML/PDF, Excel exports, emails, and Playwright screenshots
- prevent mojibake or encoding corruption during import/export, OCR, barcode metadata handling, PDF generation, clipboard flows, and mobile camera workflows
- ensure fonts provide glyph coverage for all supported locales
- ensure search, sorting, filtering, and case-insensitive comparisons are locale-aware where feasible
- verify screen readers and accessibility tooling pronounce localized text correctly where feasible
- ensure screen readers and assistive technologies correctly handle Slovenian Latin, Serbian Latin, Serbian Cyrillic, Macedonian Cyrillic, and Albanian characters

---

## 12. Book Metadata Translation

Book metadata translation is stored in database records.

Supported target languages should be project-configurable.

Example project setting:

```json
{
  "DefaultOutputLanguages": ["en", "sl"],
  "EnableAutoTranslation": true,
  "RequireManualApprovalBeforePaidAI": true
}
```

Translation rules:

- original text must be preserved
- translated text must track source
- AI translations are draft until reviewed
- long copyrighted descriptions should not be copied blindly
- prefer short donor-created summaries or links to source records

---

## 13. Metadata Enrichment

### 13.1 ISBN-First

If ISBN exists, use it first.

Support:

- ISBN-10
- ISBN-13
- hyphenated ISBN
- OCR-detected ISBN
- manually entered ISBN
- barcode-detected ISBN later

### 13.2 No ISBN / Unclear ISBN

If no ISBN is available:

```text
OCR cover/title page/copyright page
Extract:
- title
- subtitle
- author
- publisher
- year
- edition
- language
Search multiple sources
Rank candidates
Show top 3–5
Human confirms
```

### 13.3 Candidate Scoring

Suggested scoring:

```text
Title similarity: 40%
Author match: 25%
Publisher/year: 15%
Language: 10%
OCR confidence: 10%
```

Use explanations in UI.

Example:

```text
Candidate A: 0.83 confidence
Reasons:
- title very similar
- author exact match
- publisher matches
- year differs by one year
```

### 13.4 Sources

Use:

- Open Library
- Google Books
- Crossref
- OpenAlex
- Wikidata
- ORCID for people
- university repositories where appropriate

Do not scrape Google Scholar.

Google Scholar should not be a dependency because automated scraping is fragile and likely against intended usage.

### 13.5 COBISS / IZUM

Keep design open for COBISS integration, but do not depend on it.

If COBISS/IZUM access is later permitted:

- add it as an external catalog source
- map results through ExternalCatalogMatch
- do not pollute core domain with COBISS-specific assumptions
- preserve COBISS identifiers and URLs
- respect access agreements and rate limits

---

## 14. OCR

### 14.1 OCR Inputs

OCR should support:

- cover
- title page
- copyright page
- back cover
- spine
- table of contents
- stamps/inscriptions

### 14.2 OCR Storage

Store:

- raw OCR text
- cleaned OCR text
- language hints
- average confidence
- engine name
- photo reference
- timestamp

### 14.3 OCR Review Queues

Create review queues for:

- low confidence OCR
- unknown language
- possible ISBN found but invalid checksum
- possible title but no match
- multiple competing matches
- Cyrillic/Latin uncertainty

---

## 15. Condition Recognition

The app may estimate book condition from photos.

This is a suggestion only.

Potential checks:

- torn cover
- missing cover
- bent corners
- spine damage
- water stains
- yellowing
- handwriting
- highlighting
- loose pages
- mold-like stains
- library stamps
- labels

Condition scale:

```text
LikeNew
Good
Acceptable
Poor
DiscardReview
Unknown
```

Store:

```text
ConditionSuggested
ConditionConfidence
ConditionReasons
ConditionFinal
ConditionReviewedByHuman
```

Never rely on AI alone for mold, water damage, or missing pages.

---

## 16. Search

### 16.1 Required Search Capabilities

Support search by:

- title
- author
- ISBN
- publisher
- year
- language
- subject
- storage location
- condition
- donation status
- external catalog ID

### 16.2 Regional Search Requirements

Support:

- case-insensitive search
- accent-insensitive search
- Latin/Cyrillic normalization
- transliteration support eventually

Examples that should eventually match:

```text
Njegoš
Njegos
Његош
```

Use PostgreSQL features:

- `pg_trgm`
- `unaccent`
- full-text search
- normalized search columns

---

## 17. Permissions and Roles

### 17.1 Roles

```text
Owner
Admin
Contributor
Reviewer
Viewer
MetadataReviewer
Translator
RegionalAdmin
```

### 17.2 Owner

Can:

- manage tenant
- manage users
- add/edit/delete books
- publish offers
- import/export
- run AI services
- allocate books

### 17.3 Contributor

Can:

- add books
- edit books
- upload photos
- run enrichment if allowed

### 17.4 Reviewer

Can:

- view assigned donation batches/offers
- mark interest
- comment
- export selections

Cannot:

- edit donor storage data
- run paid AI services
- view private donor notes

### 17.5 Viewer

Read-only.

### 17.6 Metadata Reviewer

Can:

- confirm/reject metadata matches
- review AI translations
- review person/institution/course associations

### 17.7 Translator

Can:

- review UI localization if granted
- review book metadata translations if granted

### 17.8 Regional Admin

Future role for hosted/regional deployments.

Can manage:

- verified libraries
- regional scopes
- abuse reports
- public feed moderation

---

## 18. Privacy and Security

### 18.1 Private Data

Private data includes:

- donor exact storage locations
- home/locker details
- private notes
- unshared photos
- user emails
- private interest messages
- unpublished donation batches

### 18.2 Public/Shared Data

Shared data may include:

- book title
- author
- publisher
- year
- ISBN
- general condition
- public notes
- offer-level approximate location, such as country/region
- selected photos if allowed

### 18.3 Security Rules

- Default to private.
- Do not expose storage location in public feed.
- Do not expose donor contact details unless donor chooses.
- Do not expose exact home address.
- Use secure secret storage.
- Log security-sensitive actions.
- Validate uploads.
- Strip EXIF from publicly visible images.
- Rate limit expensive AI operations.
- Keep audit logs for imports and allocations.

---

## 19. AI Cost Control

Paid services must be controlled.

Requirements:

- only approved users can run AI
- per-tenant AI settings
- manual approval before paid AI in MVP
- track OCR cost
- track translation cost
- track metadata enrichment calls
- allow AI to be disabled globally
- queue long-running AI jobs
- avoid duplicate OCR on same image unless forced

Suggested settings:

```json
{
  "EnableOcr": true,
  "EnableTranslation": false,
  "EnableConditionDetection": false,
  "RequireManualApprovalBeforePaidAI": true,
  "MonthlyBudgetLimit": 10.00
}
```

---

## 20. Configuration

Project-level settings:

```json
{
  "DefaultCulture": "en",
  "SupportedCultures": ["en", "sl", "hr", "bs", "sr-Latn", "sr-Cyrl", "mk", "sq", "de", "it", "fr"],
  "DefaultOutputLanguages": ["en", "sl"],
  "PreferredMetadataSources": ["OpenLibrary", "GoogleBooks", "Wikidata"],
  "EnableCobiss": false,
  "EnableOcr": false,
  "EnableAutoTranslation": false,
  "EnablePublicOfferFeed": false,
  "RequireApprovedEmails": true
}
```

---

## 21. Testing

### 21.1 Test Frameworks

Use:

- xUnit
- FluentAssertions
- Testcontainers for PostgreSQL integration tests
- Playwright for end-to-end browser tests

### 21.2 Domain Tests

Test:

- ISBN normalization
- ISBN checksum validation
- donation status transitions
- condition status logic
- tenant membership authorization
- location hierarchy
- candidate scoring

### 21.3 Application Tests

Test:

- create book
- update book
- add photo
- create donation batch
- export Excel
- import Excel
- generate pick list
- mark delivery status

### 21.4 Infrastructure Tests

Test:

- PostgreSQL mappings
- migrations
- external API client parsing with mocked responses
- blob storage abstraction
- `.po` localization loading

### 21.5 E2E Tests

Test:

- login bypass/test auth mode
- create location
- add book
- upload photo placeholder
- export Excel
- import decision file
- view pick list

### 21.6 Golden/Snapshot Tests

Useful for:

- Excel export structure
- generated pick list
- localization key validation

---

## 22. Documentation

### 22.1 README.md

Must include:

- project purpose
- status
- quick start
- architecture overview
- supported workflows
- contribution guide link
- localization guide link
- license
- disclaimer that AI results require review

### 22.2 Docs Languages

Initial docs:

- English
- Slovenian

Expanded institutional/public deployment set to scaffold and support over time:

- Croatian
- Bosnian
- Serbian Latin
- Serbian Cyrillic
- Macedonian
- Albanian
- German
- Italian
- French

Optional:

- Spanish

### 22.3 Required Tutorials

Create:

```text
docs/en/getting-started.md
docs/en/donor-tutorial.md
docs/en/library-reviewer-tutorial.md
docs/en/excel-import-export.md
docs/en/localization.md
docs/en/deployment-azure.md
docs/en/architecture.md
docs/en/ai-enrichment.md
docs/en/storage-workflows.md
```

Slovenian equivalents should be created early:

```text
docs/sl/getting-started.md
docs/sl/donor-tutorial.md
docs/sl/library-reviewer-tutorial.md
docs/sl/excel-import-export.md
```

### 22.4 Documentation Style

Docs should be practical and task-oriented.

Prefer:

```text
How to catalog your first box
How to export a list for a library
How to import library decisions
How to retrieve requested books
```

Avoid overly abstract documentation.

---

## 23. README Initial Draft Requirements

README should describe the app as:

> A practical tool for cataloging, offering, and retrieving donated educational books.

Avoid positioning it as only an AI app.

Mention:

- manual inventory
- Excel workflow
- optional AI enrichment
- multilingual UI
- regional preservation value
- future library feed

---

## 24. CI/CD

### 24.1 CI Pipeline

On pull request:

- restore dependencies
- build
- run unit tests
- run integration tests if possible
- validate `.po` files
- validate formatting
- run lint/analyzers
- optionally run Playwright tests

### 24.2 Documentation Pipeline

- check internal links
- build docs site if used
- ensure required docs exist

---

## 25. Coding Guidelines

### 25.1 Architecture

Use clean architecture style:

```text
Domain
Application
Infrastructure
Web
```

Domain must not depend on infrastructure.

Application contains use cases.

Infrastructure contains:

- database
- blob storage
- external APIs
- OCR clients
- translation clients

Web contains:

- Blazor UI
- controllers/endpoints if needed
- authentication setup

### 25.2 Errors

Use explicit result types or well-defined exceptions.

User-facing errors must be localized.

### 25.3 IDs

Use stable IDs for exported/imported records.

Excel import must never depend on row order or title matching.

### 25.4 External APIs

All external catalog integrations must:

- be optional
- have timeouts
- handle rate limits
- record provenance
- cache results where appropriate
- be covered by mocked tests

---

## 26. Non-Goals for MVP

Do not build in MVP:

- payment
- marketplace checkout
- shipping
- escrow
- dispute handling
- full library management system
- MARC cataloging editor
- COBISS write integration
- public social features
- complex recommendation engine
- mandatory AI workflows
- mobile native app

---

## 27. Future Ideas

Potential later features:

- QR labels for boxes
- QR labels for individual books
- PWA offline intake
- bulk photo ZIP import
- MARC-like export
- library system export formats
- duplicate detection across tenants
- regional public offer feed
- verified institutional accounts
- academic memory annotations
- course/professor bibliography links
- authority normalization
- public preservation stories
- OCR improvement queue
- AI-assisted condition detection
- AI-assisted subject classification
- human translation review workflow

---

## 28. Important Product Framing

The project should not be framed primarily as:

```text
AI book scanner
```

Better framing:

```text
A tool to preserve valuable educational books and make donation practical.
```

The strongest value is the combination of:

- practical storage logistics
- multilingual metadata
- donation review
- library-friendly exports
- optional AI enrichment
- regional academic heritage preservation

---

## 29. Implementation Order

Recommended implementation sequence:

1. Create solution and project structure.
2. Add PostgreSQL and EF Core.
3. Add domain entities for tenants, users, locations, bibliographic records, physical copies.
4. Add Google OpenID login and approved email allowlist.
5. Add `.po` UI localization infrastructure.
6. Add book/manual catalog UI.
7. Add storage location UI.
8. Add photo upload abstraction.
9. Add donation batch model.
10. Add Excel export.
11. Add Excel import.
12. Add pick list.
13. Add tests.
14. Add README and docs.
15. Add Open Library / Google Books enrichment.
16. Add OCR later.
17. Add reviewer portal.
18. Add feed and multi-library interest later.

---

## 30. Acceptance Criteria for First Demo

A first demo is successful if one user can:

1. Log in with an approved Gmail account.
2. Create a storage location such as `Basement / Box 1`.
3. Add at least 10 books manually.
4. Upload at least one photo per book.
5. Export an Excel file for library review.
6. Edit the Excel file as if they were a library.
7. Import the decisions.
8. See which books are wanted.
9. Generate a pick list grouped by storage location.
10. Mark books as picked and delivered.

No AI is required for the first successful demo.

---

## 31. AI Agent Instructions

When using coding agents such as GPT, opencode, Copilot, or similar:

- follow this specification unless explicitly changed
- keep changes small and reviewable
- write tests with features
- update docs with user-visible changes
- strongly recommend installing a Playwright-oriented skill package when the agent environment supports reusable skills
- preferred curated skill: OpenAI Playwright Curated Skill at `https://github.com/openai/skills/tree/main/skills/.curated/playwright`
- use that skill to improve browser automation, DOM inspection, UI assertions, screenshot capture, accessibility auditing, localization verification, responsive/mobile checks, and future parity testing
- treat Playwright, ImageMagick, and the recommended CLI tooling stack as part of the preferred developer environment for UI, localization, screenshot, and documentation workflows
- do not introduce paid AI calls in default code paths
- do not hardcode COBISS assumptions
- keep `.po` localization for UI only
- keep book translations in database
- preserve provenance for imported/enriched data
- keep physical copies separate from bibliographic records
- avoid marketplace/payment features
- respect privacy defaults
- design for future multi-tenant deployment

When uncertain, prioritize:

1. data correctness
2. privacy
3. manual workflow reliability
4. import/export robustness
5. AI optionality
6. future extensibility

---

---

## 34. Mobile-First and “Make Books Cool” UX

The application must be pleasant and practical on a phone.

Many real cataloging sessions will happen while standing near shelves, boxes, basements, garages, storage lockers, or library rooms. The phone workflow should feel natural, fast, and visually rewarding.

### 34.1 Mobile-First Requirements

The UI must work well on:

- phones
- tablets
- desktop browsers

Phone use is not secondary.

Core mobile actions must require minimal typing:

- scan or enter ISBN
- take cover photo
- take title page photo
- select current box/location
- save and continue
- mark condition
- mark picked/packed/delivered
- scan box QR code
- browse book covers in a box

### 34.2 Thumbnail-First Book Browsing

Books should be visually browsable.

Every book list should prefer showing:

- cover thumbnail
- title
- author
- year
- condition badge
- donation/request status
- location code

Support list/grid toggle:

```text
Grid view:
- cover thumbnails
- compact cards
- good for browsing

List view:
- denser metadata
- good for review and editing
```

Books should feel like real objects, not just database rows.

### 34.3 Box QR Code Workflow

The system should generate printable QR labels for boxes and storage locations.

Example:

```text
Box: BASEMENT-S2-B14
QR: opens box detail page
```

Scanning a box QR code should show:

- box name/code
- storage hierarchy
- cover thumbnails of all books inside
- count of books
- wanted/requested count
- picked count
- missing/problem count
- actions for intake and picking

Primary QR workflows:

```text
Scan box QR
→ see covers of books inside
→ tap book
→ view details / mark picked / edit
```

```text
Scan box QR
→ add new book directly into this box
→ take cover photo
→ save and continue
```

### 34.4 Visual Box Detail Page

Box detail should be one of the most polished screens.

It should include:

- box cover grid
- progress indicators
- requested books highlighted
- missing/problem books highlighted
- quick filter chips

Example filters:

```text
All
Requested
Not reviewed
Picked
Delivered
Duplicates
Needs metadata
Needs condition review
```

### 34.5 Fast Photo Capture

Mobile capture should support:

- take cover photo
- take title page photo
- take copyright page photo
- take spine photo
- retake photo
- crop/rotate later if needed
- save quickly and move to next book

The UI should encourage fast intake:

```text
Save & Add Next
Save & Run Lookup
Save Draft
```

### 34.6 PWA Direction

The application should be designed so it can become a Progressive Web App.

Future PWA goals:

- installable on phone
- camera access
- QR/barcode scanning
- offline queue for storage rooms with weak signal
- sync when online
- cached thumbnails
- cached current box
- offline pick list

Offline mode is not required for MVP but should not be blocked by architecture.

### 34.7 QR and Barcode Scanning

The app should eventually support camera-based scanning for:

- box/location QR codes
- ISBN barcodes
- internal book labels
- donation batch labels

Scanning should route users directly to the relevant workflow.

Examples:

```text
Box QR → Box detail
Book QR → Physical copy detail
ISBN barcode → metadata lookup
Donation batch QR → batch review/pick list
```

### 34.8 Delight and Cultural Value

The app should make books feel valuable, not like clutter.

Design tone:

- respectful
- warm
- modern
- archival
- educational
- visually pleasing

Possible UI ideas:

- attractive cover grids
- “rescued books” counters
- “books offered to libraries” counters
- “books delivered” counters
- collection stories
- academic memory notes
- timeline of a book from storage to library
- visual badges for rare/old/technical/multilingual books

Avoid gamification that feels childish. The goal is to make serious books feel discoverable, useful, and worth preserving.

### 34.9 Mobile Acceptance Criteria

A mobile demo is successful if a user can:

1. Open app on phone.
2. Scan a box QR code.
3. See cover thumbnails of books in that box.
4. Add a new book to that box using the camera.
5. Save and add another book quickly.
6. Filter the box to requested books.
7. Mark a requested book as picked.
8. View a visually clear book detail page.

Mobile usability is a first-class requirement, not a later polish task.

## 32. Glossary

### BibliographicRecord

Metadata about a book/work/edition.

### PhysicalBookCopy

A real book in storage.

### DonationBatch

A group of physical copies offered or reviewed together.

### DonationOffer

A published batch visible to selected libraries or wider audiences.

### LibraryInterest

A library's expression of interest in one or more books.

### PrivateInterest

A private individual's expression of interest. No transaction is handled in-app.

### StorageLocation

A physical location hierarchy where books are stored.

### ExternalCatalogMatch

A link between an internal record and an external metadata source.

### BookLocalizedText

Database-stored translation of book metadata.

### `.po` Localization

Application UI translation files only.

---

## 33. Final Summary

Build a practical book donation registry first.

Make it excellent at:

- mobile phone intake
- cover-thumbnail browsing
- QR-based box workflows
- cataloging books
- tracking storage
- exporting Excel
- importing decisions
- generating pick lists
- preserving metadata provenance

Then add:

- ISBN lookup
- OCR
- fuzzy matching
- translation
- condition suggestions
- reviewer portal
- regional feed
- academic heritage graph

This project should remain useful even if every AI feature is disabled.


---

## 36. Usage Limits, Budgeting, and Abuse Prevention

### 36.1 Cost-Control Philosophy

AI/OCR/translation services may become expensive at scale.

The system must:
- avoid unnecessary recomputation
- avoid automatic enrichment by default
- support explicit user-triggered enrichment
- support per-user and per-tenant limits
- support grant-funded or sponsored usage
- support future institutional budgeting

### 36.2 Enrichment Must Be Explicit

Paid enrichment should not run automatically by default.

Preferred workflow:

```text
User clicks:
- Run OCR
- Enrich metadata
- Translate
- Assess condition
```

The system should:
- estimate cost
- check user limits
- check tenant limits
- optionally require approval
- queue the operation
- cache the result

### 36.3 Usage Limits

Support:
- per-user monthly EUR limits
- per-tenant monthly EUR limits
- per-operation limits
- rate limits
- concurrent job limits

### 36.4 Credits and Sponsored Usage

Future deployments may support platform credits.

Examples:
- library approves books → donor receives credits
- book delivered → donor receives credits
- grant-funded campaign → sponsored monthly allowance

Credits are platform-internal only.

### 36.5 Enrichment Cache

AI/OCR/translation results must be cached.

Do not recompute if inputs have not changed.

Cache keys should include:
- input hash
- provider
- model
- operation type
- language settings
- prompt version if relevant

### 36.6 Translation Cache

Translations must be cached.

Normalize text before hashing:
- trim whitespace
- normalize unicode
- normalize line endings
- collapse repeated spaces

### 36.7 Gzip Compression

Large text payloads should be stored gzipped.

Compress:
- OCR text
- translations
- AI enrichment JSON
- prompts/responses
- archived imports/exports
- audit payloads

Store hashes based on normalized uncompressed content.

### 36.8 Blob-Based Cache Storage

Large AI/OCR/translation payloads should be stored in object storage.

Recommended folders:

```text
/enrichment-cache/ocr/
/enrichment-cache/translation/
/enrichment-cache/metadata/
/audit/imports/
/exports/archive/
```

### 36.9 Abuse Prevention Philosophy

The platform should minimize moderation burden by design.

Prefer:
- structured workflows
- structured statuses
- structured interest expressions
- limited free-form communication
- role-based access
- invitation-based participation

Avoid open social-network-style communication.

### 36.10 Approved Phrase Strategy

Where possible, use predefined statuses and predefined workflow phrases.

Examples:
- Wanted
- Maybe
- Already owned
- Interested if delivered
- Need better condition

### 36.11 Content Safety

Uploads should support:
- file type validation
- file size limits
- malware scanning
- EXIF stripping
- rate limits
- thumbnail generation
- optional moderation for public feeds

### 36.12 Denial-of-Service Protection

Support:
- IP rate limits
- user rate limits
- tenant rate limits
- AI job queueing
- CAPTCHA for public forms
- cooldowns
- admin emergency kill switches
- monthly AI budget ceilings

### 36.13 Audit Logging

Use:
- Audit.NET

for automatic EF/database-level auditing where useful.

Also maintain explicit domain-level audit events.

Audit especially:
- login
- external identity linked
- role changes
- AI/OCR requests
- public offer publication
- Excel import/export
- allocation/delivery actions

### 36.14 Identity Broker Strategy

Preferred architecture:

```text
Application
→ Microsoft Entra External ID
→ Google / Microsoft / Apple / Facebook / Magic Link
```

### 36.15 Canonical User Identity

Canonical user identity should be based on:
- verified normalized email address

Rules:
- same verified email → same AppUser
- different provider → additional ExternalIdentity

Do not auto-merge unverified emails.

### 36.16 User Profile Data

Store minimal profile data only.

Suggested:
- email
- verified email status
- display name
- optional avatar

Rules:
- avatar is optional
- user may refuse avatar consent
- user may remove avatar
- user may refresh avatar from provider
- store avatars locally in object storage
- strip metadata


---

## 36.17 Three-Layer Cache Strategy

The platform should use a multi-layer cache architecture.

Recommended layers:

```text
Redis
→ hot cache

PostgreSQL
→ cache metadata/index

Blob/Object Storage
→ cold cache payloads
```

### Redis Responsibilities

Redis should store:

- hot OCR/enrichment results
- job status
- rate-limit counters
- budget counters
- recent cache hits
- short-lived signed URL metadata
- session-related cache data
- frequently accessed lightweight metadata

Redis data should generally be treated as disposable.

### PostgreSQL Responsibilities

PostgreSQL should store cache metadata and lookup indexes.

Examples:

```text
CacheKey
Provider
ModelName
ModelVersion
ObjectKey
CompressionType
CreatedAt
LastUsedAt
UsageCount
EstimatedCost
ActualCost
```

### Blob/Object Storage Responsibilities

Blob/object storage should contain large payloads.

Examples:

- gzipped OCR text
- translation payloads
- AI enrichment JSON
- raw AI responses
- archived imports/exports
- large audit payloads

### Recommended Cache Flow

```text
Request OCR/translation/enrichment
→ check Redis
→ if miss, check PostgreSQL cache index
→ if found, load gzipped blob from object storage
→ rehydrate Redis
→ if not found:
    run provider
    store payload in blob storage
    store metadata in PostgreSQL
    store hot result in Redis
```

### Cache Expiration Strategy

Recommended approach:

```text
Redis
→ short TTL

PostgreSQL metadata
→ long-lived

Blob payloads
→ very long-lived archival retention
```

### Cost Optimization Goal

The platform should aggressively avoid recomputation of identical OCR, translation, and enrichment operations.

Cache reuse is a first-class architectural goal.


---

## 37. Labels, QR Codes, and Physical Logistics

### 37.1 Labeling Philosophy

The platform should strongly support real-world physical organization.

Every physical container and optionally every physical book copy may receive printable labels.

Supported entities:

- storage boxes
- shelves
- lockers
- rooms
- donation batches
- physical book copies
- temporary sorting containers
- delivery containers

### 37.2 Label Contents

Minimum label contents:

- QR code
- human-readable identifier
- human-readable location or title text

Optional contents:

- custom user text
- short description
- donation batch marker
- condition marker
- institution/library marker
- packing priority
- category color marker

Example:

```text
BOX-MATH-014
Basement / Shelf 2
Calculus + Physics
```

### 37.3 QR Code Strategy

QR codes should not expose raw internal database identifiers.

Preferred approach:

```text
Short opaque identifier
or signed route
```

Example:

```text
https://letbooks.org/q/bx_29A81F
```

The server resolves the QR reference securely.

Benefits:

- permission checks
- revocation support
- URL migration flexibility
- audit logging
- future offline sync compatibility

### 37.4 Supported Printer Types

Support both:

- thermal label printers
- standard A4 office label sheets

### 37.5 Thermal Printer Support

Planned compatibility:

- Zebra
- Brother QL series
- Dymo
- generic ZPL/EPL-compatible devices

Preferred export formats:

- PDF
- PNG
- ZPL optionally later

### 37.6 A4 Label Sheet Support

Support common EU label layouts.

Examples:

- Avery Zweckform
- Herma
- generic EU office label sheets

Common layouts:

```text
2x4
3x8
4x12
```

### 37.7 Label Templates

Suggested entity:

```text
LabelTemplate
- Id
- Name
- Type
- WidthMm
- HeightMm
- Columns
- Rows
- Margin settings
- QR size
- Font sizes
```

### 37.8 Generated Labels

Suggested entity:

```text
GeneratedLabel
- Id
- EntityType
- EntityId
- TemplateId
- GeneratedAt
- BlobObjectKey
```

### 37.9 Box QR Workflow

Recommended workflow:

```text
Print label
→ attach label to box
→ scan QR with phone
→ instantly see books inside
```

Box detail view should support:

- cover thumbnails
- requested books
- picked books
- missing/problem books
- quick filtering
- fast add-book workflow

### 37.10 Scan-to-Move Workflow

The platform should support physical movement workflows.

Example:

```text
Scan book QR
→ show current location
→ scan destination box QR
→ confirm move
→ update location
→ create audit event
```

Supported scenarios:

- storage box → donation box
- storage box → packing box
- donation box → delivery batch
- correction of misplaced books
- temporary sorting operations

### 37.11 Bulk Move Workflow

Fast packing workflow:

```text
Scan destination box first
→ enter "Move books here" mode
→ scan multiple book QR codes
→ books move into destination container
```

This workflow is optimized for mobile use during donation preparation and packing.

### 37.12 Movement Audit Events

Suggested entity:

```text
BookMoveEvent
- Id
- BookCopyId
- FromLocationId
- ToLocationId
- ActorUserId
- Reason
  - StorageReorganization
  - DonationPacking
  - DeliveryPreparation
  - Correction
  - TemporarySorting
  - Other
- CreatedAt
```

### 37.13 Location and Status Separation

Physical location and donation workflow status must remain separate concepts.

Example:

```text
Book moved to donation box
≠ automatically delivered
```

Status transitions may optionally be suggested during move workflows but should remain explicit.

### 37.14 Future Label Features

Potential future additions:

- color-coded labels
- shelf maps
- room maps
- temporary relocation labels
- pick-priority labels
- library-specific labels
- QR-assisted inventory audits
- offline scan workflows
