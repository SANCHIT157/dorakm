// src/data/videoEpisodesData.js

// IMPORTANT: Direct streaming from Google Drive is highly unreliable due to CORS policies.
// You will likely encounter "Cross-Origin Read Blocking" errors, and videos may not play.
// These URLs are placeholders. You'll need to replace them with actual PUBLIC Google Drive EMBED links.
// A typical Google Drive embed URL looks like: "https://drive.google.com/file/d/FILE_ID/preview"

export const VIDEO_SEASONS_DATA = [{
        season: "Doraemon (1979 Series) - Season 1",
        episodes: [{
                id: '1979s1e1',
                title: "Episode 1: The Scolding Machine",
                description: "Nobita gets a gadget that scolds him whenever he does something wrong, leading to hilarious attempts to outsmart it.",
                videoUrl: "https://archive.org/download/doraemon-s-01-e-01-converser-bot/Doraemon%20S01E01%20%5B%40ConverserBot%5D.mp4" // REPLACE THIS WITH YOUR ACTUAL PUBLIC GOOGLE DRIVE EMBED LINK
            },
            {
                id: '1979s1e2',
                title: "Episode 2: The Anywhere Door's Misadventure",
                description: "Nobita misuses the Anywhere Door, causing chaos across the city and beyond.",
                videoUrl: "https://drive.google.com/uc?export=download&id=1j-tioT0XbEeAyeOh_4AcJ52eArw-Z2d9" // REPLACE THIS
            },
            {
                id: '1979s1e3',
                title: "Episode 3: The Memory Bread Test",
                description: "Nobita tries to ace his exams using Memory Bread, but overeats with predictable results.",
                videoUrl: "https://archive.org/download/nostalgic-collections-doraemon-s-10-e-35/%5B%40NostalgicCollections%5D%20Doraemon%20S10E35.mp4" // REPLACE THIS
            },
            {
                id: '1979s1e4',
                title: "Episode 4: Gian's Terrible Concert",
                description: "Nobita and friends try to escape Gian's ear-splitting concert, leading to comical schemes.",
                videoUrl: "https://archive.org/download/nostalgic-collections-doraemon-s-10-e-35/%5B%40NostalgicCollections%5D%20Doraemon%20S10E36.mp4" // REPLACE THIS
            },
            {
                id: '1979s1e5',
                title: "Episode 5: The Time Machine and the Dinosaur",
                description: "Nobita and Doraemon travel back in time to raise a dinosaur, forming an unlikely bond.",
                videoUrl: "https://archive.org/download/nostalgic-collections-doraemon-s-10-e-35/%5B%40NostalgicCollections%5D%20Doraemon%20S10E37.mp4" // REPLACE THIS
            },
            {
                id: '1979s1e6',
                title: "Episode 6: The What-If Box Chaos",
                description: "Nobita uses the What-If Box to create a world without gravity, leading to floating mayhem.",
                videoUrl: "https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_FILE_ID_6/preview" // REPLACE THIS
            },
            // ... Add more episodes for Season 1 (up to 10-15 for demonstration, you'll add all 350+)
        ]
    },
    {
        season: "Doraemon (2005 Series) - Season 1",
        episodes: [{
                id: '2005s1e1',
                title: "Episode 1: Doraemon Comes to Town (2005)",
                description: "The very first episode of the 2005 series, introducing Doraemon's arrival to help Nobita in a new animation style.",
                videoUrl: "https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_FILE_ID_7/preview" // REPLACE THIS
            },
            {
                id: '2005s1e2',
                title: "Episode 2: The Fishing Pond in the Room",
                description: "Nobita wants to go fishing, so Doraemon creates a miniature fishing pond right in his room.",
                videoUrl: "https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_FILE_ID_8/preview" // REPLACE THIS
            },
            // ... Add more episodes for 2005 Season 1
        ]
    },
    // ... Add more season objects as needed for your 350+ episodes
];