import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { theme } from '../theme';
import { createClient } from '@supabase/supabase-js';
import \* as Location from 'expo-location';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';

export const supabase = createClient(supabaseUrl, supabaseKey);

export const subscribeToMessages = (chatId: string, callback: (message: any) => void) => {
return supabase
.channel(`chat:${chatId}`)
.on('INSERT', callback)
.subscribe();
};

export async function getCurrentLocation() {
const { status } = await Location.requestForegroundPermissionsAsync();

if (status !== 'granted') {
throw new Error('Permission denied');
}

const location = await Location.getCurrentPositionAsync({});
return location;
}

export default function Layout() {
return (
<PaperProvider theme={theme}>
<Stack>
<Stack.Screen
name="index"
options={{
            title: 'Home',
            headerShown: false
          }}
/>
{/_ Other screens _/}
</Stack>
</PaperProvider>
);
}

interface MessageComposerProps {
onSend: (message: string) => void;
}

export function MessageComposer({ onSend }: MessageComposerProps) {
const [message, setMessage] = useState('');

const handleSend = () => {
if (message.trim()) {
onSend(message);
setMessage('');
}
};

return (
<View style={styles.container}>
<TextInput
        mode="outlined"
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message..."
        style={styles.input}
        multiline
      />
<IconButton
        icon="send"
        mode="contained"
        onPress={handleSend}
        disabled={!message.trim()}
      />
</View>
);
}

const styles = StyleSheet.create({
container: {
flexDirection: 'row',
padding: 8,
alignItems: 'center',
backgroundColor: 'white',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
input: {
flex: 1,
marginRight: 8,
},
});

/\*
📂 Project Structure
/app
/\_layout.tsx # Root layout with navigation setup
/index.tsx # Home screen
/(auth) # Auth group
/login.tsx
/signup.tsx
/(tabs) # Main tab navigation
/home.tsx
/guides.tsx
/activities.tsx
/trips.tsx
/chat.tsx
/(modals) # Modal screens
/guide-details.tsx
/booking.tsx
/activity-details.tsx

/components
/auth # Authentication related components
/guides # Guide-related components
/activities # Activity-related components
/chat # Chat-related components
/common # Shared/reusable components
/trips # Trip management components

/hooks # Custom React hooks
/services # API and external service integrations
/utils # Helper functions and utilities
/types # TypeScript type definitions
/constants # App constants and configuration
/assets # Images, fonts, etc.
/theme # Styling and theming
\*/

/\*
📚 Database Schema

-- Enable necessary extensions
create extension if not exists "uuid-ossp";
create extension if not exists "postgis";

-- Users table
create table public.users (
id uuid references auth.users primary key,
full_name text not null,
email text unique not null,
avatar_url text,
phone_number text,
preferred_language text,
created_at timestamp with time zone default timezone('utc'::text, now()),
updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Guides table
create table public.guides (
id uuid primary key default uuid_generate_v4(),
user_id uuid references public.users(id),
languages text[] not null,
daily_rate decimal not null,
experience_years integer,
bio text,
certification_info jsonb,
specialties text[],
availability jsonb,
average_rating decimal default 0,
total_reviews integer default 0,
created_at timestamp with time zone default timezone('utc'::text, now()),
updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Activities table
create table public.activities (
id uuid primary key default uuid_generate_v4(),
title text not null,
description text,
category text not null,
location geometry(Point, 4326),
price_range text,
duration interval,
difficulty_level text,
included_items text[],
images text[],
created_by uuid references public.users(id),
created_at timestamp with time zone default timezone('utc'::text, now()),
updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Bookings table
create table public.bookings (
id uuid primary key default uuid_generate_v4(),
guide_id uuid references public.guides(id),
user_id uuid references public.users(id),
start_date timestamp with time zone not null,
end_date timestamp with time zone not null,
total_price decimal not null,
status text not null check (status in ('pending', 'confirmed', 'completed', 'cancelled')),
payment_status text not null check (payment_status in ('pending', 'paid', 'refunded')),
notes text,
created_at timestamp with time zone default timezone('utc'::text, now()),
updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Reviews table
create table public.reviews (
id uuid primary key default uuid_generate_v4(),
booking_id uuid references public.bookings(id),
user_id uuid references public.users(id),
guide_id uuid references public.guides(id),
rating integer check (rating >= 1 and rating <= 5),
comment text,
created_at timestamp with time zone default timezone('utc'::text, now()),
updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Messages table
create table public.messages (
id uuid primary key default uuid_generate_v4(),
chat_id uuid not null,
sender_id uuid references public.users(id),
receiver_id uuid references public.users(id),
content text not null,
message_type text default 'text',
read_at timestamp with time zone,
created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Saved Items table
create table public.saved_items (
id uuid primary key default uuid_generate_v4(),
user_id uuid references public.users(id),
item_type text not null check (item_type in ('guide', 'activity')),
item_id uuid not null,
created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Trips table
create table public.trips (
id uuid primary key default uuid_generate_v4(),
user_id uuid references public.users(id),
title text not null,
start_date timestamp with time zone,
end_date timestamp with time zone,
location text,
notes text,
created_at timestamp with time zone default timezone('utc'::text, now()),
updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Trip Items table
create table public.trip_items (
id uuid primary key default uuid_generate_v4(),
trip_id uuid references public.trips(id),
item_type text not null check (item_type in ('booking', 'activity')),
item_id uuid not null,
scheduled_date timestamp with time zone,
notes text,
created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Create indexes
create index idx_guides_languages on public.guides using gin (languages);
create index idx_activities_location on public.activities using gist (location);
create index idx_messages_chat_id on public.messages (chat_id);
create index idx_bookings_dates on public.bookings (start_date, end_date);
\*/
