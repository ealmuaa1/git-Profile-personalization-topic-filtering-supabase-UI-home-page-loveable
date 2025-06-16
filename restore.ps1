# Create directories if they don't exist
New-Item -ItemType Directory -Force -Path "Tech pulse/src/lib"
New-Item -ItemType Directory -Force -Path "Tech pulse/src/pages"
New-Item -ItemType Directory -Force -Path "Tech pulse/src/data"
New-Item -ItemType Directory -Force -Path "Tech pulse/src/components"
New-Item -ItemType Directory -Force -Path "Tech pulse/src/pages/games"

# Copy files
Copy-Item "src/lib/lessonService.ts" -Destination "Tech pulse/src/lib/" -Force
Copy-Item "src/pages/QuestPage.tsx" -Destination "Tech pulse/src/pages/" -Force
Copy-Item "src/data/quests.ts" -Destination "Tech pulse/src/data/" -Force
Copy-Item "src/pages/Learn.tsx" -Destination "Tech pulse/src/pages/" -Force
Copy-Item "src/components/IdeaCard.tsx" -Destination "Tech pulse/src/components/" -Force
Copy-Item "src/lib/fetchSparkIdeas.ts" -Destination "Tech pulse/src/lib/" -Force
Copy-Item "src/pages/games/MemoryGamePage.tsx" -Destination "Tech pulse/src/pages/games/" -Force
Copy-Item "src/pages/games/FillInBlankGamePage.tsx" -Destination "Tech pulse/src/pages/games/" -Force
Copy-Item "src/pages/ProfilePage.tsx" -Destination "Tech pulse/src/pages/" -Force 