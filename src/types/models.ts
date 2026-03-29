/* ─── Profile ─────────────────────────────────────────────── */

export type UserRole = "parent" | "kid";

export interface Profile {
  id: string;
  role: UserRole;
  display_name: string;
  avatar_url: string | null;
  parent_id: string | null;
  points_balance: number;
  created_at: string;
  updated_at: string;
}

/* ─── Lesson ──────────────────────────────────────────────── */

export type LessonStatus = "draft" | "ready" | "in_progress" | "completed";

export interface ThemeMetadata {
  theme_id: string;
  theme_name: string;
  generated_ui: string | null;
  generated_logic: string | null;
}

export interface Lesson {
  id: string;
  kid_id: string;
  title: string;
  raw_content: string;
  theme_metadata: ThemeMetadata | null;
  status: LessonStatus;
  points_awarded: number;
  created_at: string;
  updated_at: string;
}

/* ─── Reward ──────────────────────────────────────────────── */

export interface Reward {
  id: string;
  parent_id: string;
  title: string;
  description: string | null;
  point_cost: number;
  is_redeemed: boolean;
  redeemed_by: string | null;
  created_at: string;
  updated_at: string;
}

/* ─── Theme ───────────────────────────────────────────────── */

export interface Theme {
  id: string;
  name: string;
  description: string;
  icon: string;
  color_primary: string;
  color_secondary: string;
}
