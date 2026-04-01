# Implementation Plan - Persona-Specific CLI Commands

## Phase 1: Product and BSG Commands [checkpoint: a354de1]
- [x] **Task: Implement Product BRD Command** [368a59e]
    - [x] Write failing tests for `commands/product/draft-brd.toml`.
    - [x] Create `commands/product/draft-brd.toml` with RBI-aware prompt logic.
    - [x] Verify tests pass.
- [x] **Task: Implement BSG Compliance Command** [8c49014]
    - [x] Write failing tests for `commands/bsg/check-compliance.toml`.
    - [x] Create `commands/bsg/check-compliance.toml` with RBI-aware prompt logic.
    - [x] Verify tests pass.
- [x] **Task: Conductor - User Manual Verification 'Product and BSG Commands' (Protocol in workflow.md)**

## Phase 2: Architecture and Engineering Commands [checkpoint: a32326b]
- [x] **Task: Implement Architecture Solution Command** [db9adef]
    - [x] Write failing tests for `commands/arch/propose-solution.toml`.
    - [x] Create `commands/arch/propose-solution.toml` with RBI-aware prompt logic.
    - [x] Verify tests pass.
- [x] **Task: Implement Engineering Security Review Command** [db9adef]
    - [x] Write failing tests for `commands/eng/review-security.toml`.
    - [x] Create `commands/eng/review-security.toml` with RBI-aware prompt logic.
    - [x] Verify tests pass.
- [x] **Task: Conductor - User Manual Verification 'Architecture and Engineering Commands' (Protocol in workflow.md)**

## Phase 3: QA and Release Commands [checkpoint: 008e63d]
- [x] **Task: Implement QA Test Generation Command** [90ef1dc]
    - [x] Write failing tests for `commands/qa/generate-tests.toml`.
    - [x] Create `commands/qa/generate-tests.toml` with RBI-aware prompt logic.
    - [x] Verify tests pass.
- [x] **Task: Implement Release Exit Strategy Command** [90ef1dc]
    - [x] Write failing tests for `commands/release/check-exit-strategy.toml`.
    - [x] Create `commands/release/check-exit-strategy.toml` with RBI-aware prompt logic.
    - [x] Verify tests pass.
- [x] **Task: Conductor - User Manual Verification 'QA and Release Commands' (Protocol in workflow.md)**


## Phase 4: Manifest Registration and Integration
- [ ] **Task: Register Commands in Manifest**
    - [ ] Update `gemini-extension.json` with all new commands.
- [ ] **Task: Final Integration Validation**
    - [ ] Run overall test suite to ensure all commands are correctly exposed.
- [ ] **Task: Conductor - User Manual Verification 'Manifest Registration and Integration' (Protocol in workflow.md)**
