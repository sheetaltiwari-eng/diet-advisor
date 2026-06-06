# Database Schema Design - Smart Diet Advisor

This document details the database structure for the application, following the requested format.

---

## 🟢 Table: User
| # | Column Name | Data Type | Allow Null | Key |
|---|---|---|---|---|
| 1 | UserId | ObjectId | ❌ | PK |
| 2 | Name | String | ❌ | |
| 3 | Email | String | ❌ | Unique |
| 4 | Password | String (Hashed) | ❌ | |
| 5 | Role | Enum (USER, ADMIN) | ❌ | |
| 6 | CreatedAt | Date | ❌ | |

---

## 🟢 Table: Health Profile
| # | Column Name | Data Type | Allow Null | Key |
|---|---|---|---|---|
| 1 | ProfileId | ObjectId | ❌ | PK |
| 2 | UserId | ObjectId | ❌ | FK |
| 3 | Age | Number | ❌ | |
| 4 | Gender | String | ❌ | |
| 5 | Weight | Number | ❌ | |
| 6 | Height | Number | ❌ | |
| 7 | Goal | String | ✅ | |
| 8 | ActivityLevel | String | ✅ | |
| 9 | DietaryPref | Array (String) | ✅ | |

---

## 🟢 Table: Diet Plan
| # | Column Name | Data Type | Allow Null | Key |
|---|---|---|---|---|
| 1 | PlanId | ObjectId | ❌ | PK |
| 2 | UserId | ObjectId | ❌ | FK |
| 3 | PlanName | String | ❌ | |
| 4 | TargetCalories | Number | ❌ | |
| 5 | Protein | Number | ✅ | |
| 6 | Carbs | Number | ✅ | |
| 7 | Fats | Number | ✅ | |
| 8 | CreatedAt | Date | ❌ | |

---

## 🟢 Table: Queries Chat
| # | Column Name | Data Type | Allow Null | Key |
|---|---|---|---|---|
| 1 | ChatId | ObjectId | ❌ | PK |
| 2 | UserId | ObjectId | ❌ | FK |
| 3 | Message | String | ❌ | |
| 4 | Sender | Enum (USER, AI) | ❌ | |
| 5 | Timestamp | Date | ❌ | |

---

## 🟢 Table: Meal Tracking
| # | Column Name | Data Type | Allow Null | Key |
|---|---|---|---|---|
| 1 | TrackingId | ObjectId | ❌ | PK |
| 2 | UserId | ObjectId | ❌ | FK |
| 3 | FoodItem | String | ❌ | |
| 4 | Calories | Number | ❌ | |
| 5 | MealType | String | ❌ | |
| 6 | Date | Date | ❌ | |

---

## 🟢 Table: Health Tips
| # | Column Name | Data Type | Allow Null | Key |
|---|---|---|---|---|
| 1 | TipId | ObjectId | ❌ | PK |
| 2 | Title | String | ❌ | |
| 3 | Content | String | ❌ | |
| 4 | Category | String | ✅ | |
| 5 | CreatedAt | Date | ❌ | |
