import { supabase } from "./supabase";

export interface UserSettings {
  darkMode: boolean;
  notifications: boolean;
  emailUpdates: boolean;
}

export const loadUserSettings = async (userId: string): Promise<UserSettings> => {
  try {
    const { data, error } = await supabase
      .from("user_settings")
      .select("settings")
      .eq("user_id", userId)
      .single();

    if (error) {
      console.warn("No settings found for user, using defaults:", error);
      return {
        darkMode: false,
        notifications: true,
        emailUpdates: true,
      };
    }

    return data?.settings || {
      darkMode: false,
      notifications: true,
      emailUpdates: true,
    };
  } catch (error) {
    console.error("Error loading user settings:", error);
    return {
      darkMode: false,
      notifications: true,
      emailUpdates: true,
    };
  }
};

export const saveSettings = async (
  userId: string,
  settings: UserSettings
): Promise<void> => {
  try {
    // Check if settings row exists for this user
    const { data: existingSettings } = await supabase
      .from("user_settings")
      .select("user_id")
      .eq("user_id", userId)
      .single();

    if (existingSettings) {
      // Update existing settings
      const { error } = await supabase
        .from("user_settings")
        .update({ settings })
        .eq("user_id", userId);

      if (error) throw error;
    } else {
      // Insert new settings row
      const { error } = await supabase.from("user_settings").insert({
        user_id: userId,
        settings,
      });

      if (error) throw error;
    }
  } catch (error) {
    console.error("Error saving user settings:", error);
    throw error;
  }
};
