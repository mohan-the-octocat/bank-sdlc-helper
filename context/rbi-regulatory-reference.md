# RBI Regulatory Quick Reference

This document provides a concise summary of key RBI guidelines for quick lookup during the application development lifecycle.

## Key Regulatory Themes

### 1. Data Sovereignty
- **Mandate:** All payment data and core banking logs must reside within India.
- **Applicability:** All banks and payment system providers operating in India.

### 2. Multi-Factor Authentication (MFA)
- **Mandate:** All digital payment transactions must be secured by at least two factors of authentication.
- **Preference:** Biometric or hardware-based factors are preferred over SMS-based OTPs.

### 3. Third-Party Risk (Outsourcing)
- **Mandate:** Regulated Entities (REs) are fully accountable for the actions of their service providers.
- **Audit Right:** The RBI must have "unhindered access" to vendor data and systems for audit purposes.

## Frequently Asked Questions

**Q: Does data localization apply to non-payment data?**
A: Core banking data and any information that can identify a customer (SPDI) should also be localized as per general IT governance standards.

**Q: Can we use public cloud providers like AWS or Azure?**
A: Yes, provided the RE ensures data localization, conducts a materiality assessment, and has a board-approved exit strategy.

**Q: What is "material" outsourcing?**
A: Any service that, if disrupted, would have a significant impact on the RE's business operations, reputation, or customer data security.

## Source References
- [RBI Master Direction on IT Outsourcing (2023)](https://www.rbi.org.in/)
- [RBI Master Direction on ITGRCA (2023)](https://www.rbi.org.in/)
- [RBI Digital Payment Authentication Directions (2025)](https://www.rbi.org.in/)
