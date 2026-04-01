# RBI Compliance Checklist: Architecture Design

Use this checklist during the Solution Architecture and Technical Design phase to ensure regulatory compliance.

## Data and Infrastructure
- [ ] **Data Localization:** Is the architecture designed to store and process all payment and core banking data exclusively within India?
- [ ] **Cloud Responsibility:** Is there a clearly defined Shared Responsibility Model for data protection if using public cloud?
- [ ] **Resilience:** Does the design include high availability and disaster recovery mechanisms aligned with the Cyber Crisis Management Plan (CCMP)?

## Security and Access
- [ ] **Zero Trust Principles:** Does the architecture implement "Zero Trust" (e.g., identity-based segmentation, least privilege)?
- [ ] **Audit Trails:** Is there a central logging mechanism that captures all administrative and transactional activity for audit?

## Source References
- RBI Master Direction on Outsourcing of IT Services (2023)
- RBI Data Localization Mandates
- RBI Master Direction on ITGRCA (2023)
