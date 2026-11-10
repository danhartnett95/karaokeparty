  // Trivia question pool - organized by category
const questionPool = {
    "Rock": [
        { question: "What is the chemical symbol for gold?", answer: "Au" },
        { question: "How many planets are in our solar system?", answer: "8" },
        { question: "What is the speed of light in a vacuum?", answer: "299,792,458 meters per second" },
        { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
        { question: "What is the smallest unit of matter?", answer: "Atom" },
        { question: "What gas do plants absorb from the atmosphere?", answer: "Carbon dioxide" },
        { question: "What is the hardest natural substance on Earth?", answer: "Diamond" },
        { question: "What is the study of weather called?", answer: "Meteorology" },
        { question: "What is the closest star to Earth?", answer: "The Sun" },
        { question: "What is the process by which plants make food?", answer: "Photosynthesis" }
    ],
    "Pop": [
        { question: "In what year did World War II end?", answer: "1945" },
        { question: "Who was the first President of the United States?", answer: "George Washington" },
        { question: "What ancient wonder was located in Alexandria?", answer: "The Lighthouse of Alexandria" },
        { question: "In what year did the Berlin Wall fall?", answer: "1989" },
        { question: "Who wrote the Declaration of Independence?", answer: "Thomas Jefferson" },
        { question: "What was the name of the ship that brought the Pilgrims to America?", answer: "The Mayflower" },
        { question: "In what year did the American Civil War begin?", answer: "1861" },
        { question: "Who was known as the Iron Lady?", answer: "Margaret Thatcher" },
        { question: "What was the name of the first atomic bomb dropped on Japan?", answer: "Little Boy" },
        { question: "What empire was ruled by Julius Caesar?", answer: "The Roman Empire" }
    ],
    "Hip Hop": [
        { question: "What is the largest ocean on Earth?", answer: "The Pacific Ocean" },
        { question: "What is the capital of Australia?", answer: "Canberra" },
        { question: "What is the longest river in the world?", answer: "The Nile River" },
        { question: "What is the smallest country in the world?", answer: "Vatican City" },
        { question: "What mountain range separates Europe from Asia?", answer: "The Ural Mountains" },
        { question: "What is the largest desert in the world?", answer: "Antarctica" },
        { question: "What is the capital of Brazil?", answer: "Brasília" },
        { question: "What is the highest mountain in the world?", answer: "Mount Everest" },
        { question: "What country is known as the Land of the Rising Sun?", answer: "Japan" },
        { question: "What is the largest country by land area?", answer: "Russia" }
    ],
    "Country": [
        { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
        { question: "What is the first book in the Harry Potter series?", answer: "Harry Potter and the Philosopher's Stone" },
        { question: "Who wrote '1984'?", answer: "George Orwell" },
        { question: "What is the name of the hobbit in 'The Hobbit'?", answer: "Bilbo Baggins" },
        { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee" },
        { question: "What is the first book in 'The Lord of the Rings' trilogy?", answer: "The Fellowship of the Ring" },
        { question: "Who wrote 'Pride and Prejudice'?", answer: "Jane Austen" },
        { question: "What is the name of the whale in 'Moby Dick'?", answer: "Moby Dick" },
        { question: "Who wrote 'The Great Gatsby'?", answer: "F. Scott Fitzgerald" },
        { question: "What is the name of the boy who never grows up in J.M. Barrie's story?", answer: "Peter Pan" }
    ],
    "Jazz": [
        { question: "What is the highest-grossing film of all time?", answer: "Avatar" },
        { question: "Who directed the film 'Inception'?", answer: "Christopher Nolan" },
        { question: "What is the name of the main character in 'The Matrix'?", answer: "Neo" },
        { question: "What year did 'The Lion King' premiere?", answer: "1994" },
        { question: "Who played Jack in 'Titanic'?", answer: "Leonardo DiCaprio" },
        { question: "What is the name of the coffee shop in 'Friends'?", answer: "Central Perk" },
        { question: "Who composed the music for 'Star Wars'?", answer: "John Williams" },
        { question: "What is the name of the wizard school in 'Harry Potter'?", answer: "Hogwarts" },
        { question: "Who played the Joker in 'The Dark Knight'?", answer: "Heath Ledger" },
        { question: "What is the name of the spaceship in 'Star Trek'?", answer: "The Enterprise" }
    ],
    "R&B": [
        { question: "How many players are on a basketball team on the court at once?", answer: "5" },
        { question: "What sport is played at Wimbledon?", answer: "Tennis" },
        { question: "How many bases are there in baseball?", answer: "4" },
        { question: "What is the duration of a standard soccer match?", answer: "90 minutes" },
        { question: "In what sport would you perform a slam dunk?", answer: "Basketball" },
        { question: "What is the name of the trophy awarded to the Super Bowl winner?", answer: "The Vince Lombardi Trophy" },
        { question: "How many holes are in a standard round of golf?", answer: "18" },
        { question: "What sport uses a puck?", answer: "Ice hockey" },
        { question: "In what year were the first modern Olympic Games held?", answer: "1896" },
        { question: "What is the maximum score in a single frame of bowling?", answer: "300" }
    ],
    "Electronic": [
        { question: "What does 'CPU' stand for?", answer: "Central Processing Unit" },
        { question: "Who co-founded Apple Inc.?", answer: "Steve Jobs and Steve Wozniak" },
        { question: "What does 'HTML' stand for?", answer: "HyperText Markup Language" },
        { question: "What year was the first iPhone released?", answer: "2007" },
        { question: "What is the name of Google's operating system for mobile devices?", answer: "Android" },
        { question: "What does 'URL' stand for?", answer: "Uniform Resource Locator" },
        { question: "Who invented the World Wide Web?", answer: "Tim Berners-Lee" },
        { question: "What is the name of Microsoft's operating system?", answer: "Windows" },
        { question: "What does 'RAM' stand for?", answer: "Random Access Memory" },
        { question: "What company created the programming language Java?", answer: "Sun Microsystems" }
    ],
    "Classical": [
        { question: "What is the main ingredient in guacamole?", answer: "Avocado" },
        { question: "What type of pasta is shaped like a tube?", answer: "Penne" },
        { question: "What is the primary ingredient in hummus?", answer: "Chickpeas" },
        { question: "What is the national dish of Spain?", answer: "Paella" },
        { question: "What is the main ingredient in sushi rice?", answer: "Rice" },
        { question: "What type of cheese is traditionally used in pizza margherita?", answer: "Mozzarella" },
        { question: "What is the main ingredient in chocolate?", answer: "Cocoa beans" },
        { question: "What is the most consumed beverage in the world after water?", answer: "Tea" },
        { question: "What is the primary ingredient in bread?", answer: "Flour" },
        { question: "What is the name of the Italian dessert made with coffee and mascarpone?", answer: "Tiramisu" }
    ]
};

// Game state
let gameBoard = [];
// Team data storage
let numberOfTeams = 2; // Default to 2 teams
let teams = []; // Array of {name: string, color: string, score: number, correctSongs: number}
let teamOneScore = 0; // Keep for backwards compatibility
let teamTwoScore = 0; // Keep for backwards compatibility
let teamOneCorrectSongs = 0; // Keep for backwards compatibility
let teamTwoCorrectSongs = 0; // Keep for backwards compatibility
let selectedCell = null;
let currentQuestionValue = 0;
/** When a tile is finalized (Move on or close modal), we store it here so "Undo Song" can re-flip it. */
let lastFinalizedTile = null;
let timerInterval = null;
let timerSeconds = 60;
let waveformAnimationId = null;
let analyserNode = null;
let audioSourceNode = null;

// Dollar values for questions
const dollarValues = [100, 200, 300, 400, 500];
const TOTAL_TRIVIA_TILES = 30;

// Audio file configuration (files in karaoke-jeopardy-sound-effects/)
const SOUND_EFFECTS_FOLDER = 'karaoke-jeopardy-sound-effects/';
const WRONG_ANSWER_FILE = SOUND_EFFECTS_FOLDER + 'wrong_answer.mp3';
const RIGHT_ANSWER_FILE = SOUND_EFFECTS_FOLDER + 'right_answer.mp3';
const CINEMATIC_TRANSITION_FILE = 'cinematic (serious) transition.mp3';

// Audio objects
let wrongAnswerAudio = null;
let rightAnswerAudio = null;
let transitionAudio = null;

// TV/HDMI safe mode: avoids Web Audio API and heavy animations that can cause some TVs (e.g. Hisense) to turn off over HDMI
const TV_SAFE_MODE_KEY = 'karaokePartyTvSafeMode';
function isTvSafeMode() {
    if (typeof localStorage === 'undefined') return false;
    return localStorage.getItem(TV_SAFE_MODE_KEY) === '1';
}
function setTvSafeMode(on) {
    if (typeof localStorage === 'undefined') return;
    if (on) localStorage.setItem(TV_SAFE_MODE_KEY, '1'); else localStorage.removeItem(TV_SAFE_MODE_KEY);
}

// Spotify configuration
// IMPORTANT: Replace these with your Spotify App credentials from https://developer.spotify.com/dashboard
// You can use an existing Spotify app - just make sure the redirect URI matches!
const SPOTIFY_CLIENT_ID = 'e9856e9af1fc4a1a866a3a557f248081'; // Replace with your Client ID from Spotify Dashboard

// Redirect URI options:
// 1. Use 127.0.0.1 instead of localhost: 'http://127.0.0.1:8000'
// 2. Use ngrok: 'https://your-ngrok-url.ngrok.io' (recommended if localhost doesn't work)
// 3. Use deployed URL: 'https://your-domain.com'
// The code auto-detects the current URL, so just make sure it matches what's in Spotify app settings
// For ngrok, make sure this matches exactly what you added in Spotify dashboard
// Remove trailing slash to ensure exact match with Spotify
let redirectUri = window.location.origin + window.location.pathname;
// Remove trailing slash if present (unless it's just the root)
redirectUri = redirectUri.replace(/\/$/, '');
const SPOTIFY_REDIRECT_URI = redirectUri;

// Debug: Log the redirect URI (disabled for cleaner console)
// console.log('Spotify Redirect URI:', SPOTIFY_REDIRECT_URI);
// console.log('Current URL:', window.location.href);
// console.log('Client ID:', SPOTIFY_CLIENT_ID);
const SPOTIFY_SCOPES = 'user-read-private user-read-email user-read-playback-state user-modify-playback-state streaming user-library-read playlist-read-private playlist-read-collaborative';
// Note: offline_access enables refresh tokens but caused invalid_scope for this app on Spotify's authorize page.

const SPOTIFY_TOKEN_STORAGE = {
    access: 'spotifyAccessToken',
    refresh: 'spotifyRefreshToken',
    expiresAt: 'spotifyTokenExpiresAt'
};
/** Refresh this many ms before access token expires (Spotify tokens last 3600s). */
const TOKEN_REFRESH_BUFFER_MS = 5 * 60 * 1000;
/** Backup refresh while a party is running (covers throttled setTimeout in background tabs). */
const TOKEN_REFRESH_INTERVAL_MS = 45 * 60 * 1000;
const TOKEN_REFRESH_MAX_RETRIES = 3;

// Spotify state
let spotifyAccessToken = null;
let spotifyRefreshToken = null;
let spotifyTokenExpiresAt = null;
let spotifyTokenRefreshPromise = null;
let spotifyTokenRefreshTimer = null;
let spotifyTokenRefreshInterval = null;
let spotifyPlayer = null;
let spotifyDeviceId = null;
let spotifyPlaylists = [];
let selectedPlaylistTracks = [];
let spotifyReady = false;
let spotifyDevicePrimed = false;
/** When true, play a random track from LANDING_PLAYLIST_ID when the Web Playback SDK becomes ready (after OAuth redirect to KARAOKE PARTY!). */
let playLandingPlaylistOnReady = false;
let landingPlaybackStartPending = false;
let landingPlaybackStartInProgress = false;
let landingPlaybackGestureCleanup = null;
/**
 * Set by the SDK's autoplay_failed event: the browser is holding this tab's audio until a click/keypress.
 * While true, Spotify's servers may still say "playing", so a "started" result must NOT be trusted and the
 * click/keypress fallback must stay armed. Cleared only when a retry runs inside a real user gesture.
 */
let landingAutoplayBlocked = false;

const LANDING_PLAYLIST_ID = '4xUYhdcMjWStxOGWsTCfya'; // "Landing Screen Karaoke Party" – landing + selection pages until game board

let selectedCategoryPlaylists = []; // Store the 6 selected playlist IDs
let displayedPlaylists = []; // Store the 16 playlists shown on category selection page
let selectedCategoryNames = []; // Store the names of the 6 selected playlists
let isLoadingSelectedPlaylists = false; // Flag to prevent initGame from running during playlist loading

// Category playlists mapping (category index -> playlist tracks)
let categoryPlaylists = []; // Array where each element is an array of tracks for that category
let categoryPlaylistNames = [
    '70s Karaoke Jeopardy!',  // Category 0 (first category)
    '80s Karaoke Jeopardy!',  // Category 1 (second category)
    '90s Karaoke Jeopardy!',  // Category 2 (third category)
    '00s Karaoke Jeopardy!'   // Category 3 (fourth category)
    // Categories 4 and 5 will use fallback or empty
];

// Store Spotify tracks for each tile (6x5 grid)
let tileSpotifyTracks = []; // 2D array: [categoryIndex][valueIndex] = {uri, name, artist}
let tileAudioFileNames = []; // 2D array: [categoryIndex][valueIndex] = track name string
let tileAlbumCovers = []; // 2D array: [categoryIndex][valueIndex] = album cover URL
let currentPlayingTrack = null; // Track currently playing Spotify track
let fadeOutInterval = null; // For fade out animation
let landingSpotifyFadeOutInterval = null; // For landing/title song Spotify fade out
let landingSpotifyFadeOutTimeout = null; // Delayed start for landing/title song fade out
let moveOnSafetyStopTimeout = null; // Clear when starting a new tile so we don't stop the new track
/**
 * Tile playback generation. Bumped when a new tile starts and when tile music is faded/stopped.
 * An in-flight play attempt (including its retries) captures the value at start and aborts as soon
 * as it no longer matches, so a slow/retrying attempt can never restart music after the user clicked
 * another tile or pressed Move On (criteria #2 and #3).
 */
let tilePlaybackGeneration = 0;
/** True while a tile click is starting its song; extra clicks are ignored so attempts can't overlap. */
let tileClickInProgress = false;

// Background music (Boogie Wonderland) - not auto-played on first four pages
let backgroundMusic = null; // Audio element for background music
let backgroundMusicStarted = false; // Flag to ensure it only starts once

// Legacy audio files (kept for fallback)
let tileAudioFiles = []; // 2D array: [categoryIndex][valueIndex] = Audio object
let currentPlayingAudio = null; // Track currently playing song

// List of all available music files in the music folder
const availableMusicFiles = [
    'music/AJR - Way Less Sad (Official Video).mp3',
    'music/Alanis Morissette - Head Over Feet (Official 4K Music Video).mp3',
    'music/American Hi-Fi - Flavor of the Weak Lyrics (HQ).mp3',
    'music/Avicii - Levels (Lyrics).mp3',
    'music/Baker Street.mp3',
    'music/Believe Me.mp3',
    'music/Billy Joel - Piano Man (Lyrics).mp3',
    'music/Bob Seger & The Silver Bullet Band - Night Moves (Official Video).mp3',
    'music/Boston - More Than a Feeling (Official HD Video).mp3',
    'music/BPT.mp3',
    'music/Central Cee - Doja.mp3',
    'music/Charli xcx - Guess featuring Billie Eilish (official video).mp3',
    'music/Check yes or no (George Strait) lyrics.mp3',
    'music/Cher Lloyd - Want U Back (US Version).mp3',
    'music/Dammit.mp3',
    'music/Daniel Powter - Bad Day (Official Music Video) [HD].mp3',
    'music/Dave Matthews - Ants Marching.mp3',
    'music/Day Tripper (Remastered 2015).mp3',
    'music/Dido - Thank You (Official Video).mp3',
    'music/Dixieland Delight - Alabama - Lyrics.mp3',
    'music/Dolly Parton - 9 To 5.mp3',
    'music/Dr. Dre - Still D.R.E. (Lyrics) ft. Snoop Dogg.mp3',
    'music/Dreams (2004 Remaster).mp3',
    'music/Dua Lipa - Whatcha Doing (Official Visualiser).mp3',
    'music/Eleanor Rigby (Remastered 2015).mp3',
    'music/Everytime We Touch.mp3',
    'music/Fall Out Boy - Sugar We\'re Going Down With Lyrics! HQ.mp3',
    'music/Famous.mp3',
    'music/Frankie Valli & The Four Seasons - December, 1963 (Oh What A Night!) (Official Audio).mp3',
    'music/Franz Ferdinand - Take Me Out (Video).mp3',
    'music/Gladys Knight & The Pips - Midnight Train to Georgia (Official Audio).mp3',
    'music/Good Charlotte - The Anthem [HIGH QUALITY  LYRICS].mp3',
    'music/HUNCHO JACK, Travis Scott, Quavo - Where U From (Audio).mp3',
    'music/I Am The Walrus (Remastered 2009).mp3',
    'music/I Had Some Help.mp3',
    'music/Ignition - R. Kelly(Lyrics Video).mp3',
    'music/Jimmy Buffett - Volcano (Audio).mp3',
    'music/Jonas Brothers - Strong Enough (Lyrics) ft. Bailey Zimmerman.mp3',
    'music/Kelly Clarkson - Behind These Hazel Eyes (Lyrics  Lyric Video).mp3',
    'music/Kelly Clarkson - Since U Been Gone (VIDEO).mp3',
    'music/Kenny Chesney - Pirate Flag.mp3',
    'music/Kenny Chesney When the Sun Goes Down.mp3',
    'music/Kill Jill - Big Boi Ft. Killer Mike, Jeezy - Lyrics On Screen.mp3',
    'music/Lit - My Own Worst Enemy.mp3',
    'music/Lola Young - Conceited.mp3',
    'music/Los Lonely Boys - Heaven (Video Version).mp3',
    'music/Lucy In The Sky With Diamonds (Remastered 2009).mp3',
    'music/Michael Bublé - White Christmas (ft. Shania Twain) [Official HD].mp3',
    'music/Mike WiLL Made-It - 23 (Lyrics) ft. Miley Cyrus, Wiz Khalifa, Juicy J.mp3',
    'music/Mud on the Tires.mp3',
    'music/Natalie Imbruglia - Torn (Official Video).mp3',
    'music/Natasha Bedingfield - Unwritten (Lyrics).mp3',
    'music/Nelly Furtado - I\'m Like A Bird (Official Music Video).mp3',
    'music/Ohio (Come Back To Texas).mp3',
    'music/Olivia Rodrigo - all-american bitch (Official Lyric Video).mp3',
    'music/Only Wanna Be With You.mp3',
    'music/P!nk - Raise Your Glass (Lyrics).mp3',
    'music/Patsy Cline - Back In Baby\'s Arms.mp3',
    'music/Phil Collins - You\'ll Be In My Heart with Lyrics.mp3',
    'music/Radiohead - Creep.mp3',
    'music/Red Hot Chili Peppers - Scar Tissue (Lyrics).mp3',
    'music/Red Wine Supernova.mp3',
    'music/Redneck Yacht Club Craig Morgan LYRICS.mp3',
    'music/Sabrina Carpenter - Espresso.mp3',
    'music/Selena Gomez - Same Old Love (Lyrics).mp3',
    'music/SexyBack.mp3',
    'music/Shaboozey - A Bar Song (Tipsy) (Lyrics).mp3',
    'music/Shaggy - Angel ft. Rayvon [HQ AUDIO].mp3',
    'music/Simple Plan - I\'m Just A Kid Lyrics.mp3',
    'music/Sixpence None The Richer - Kiss Me (Official Music Video).mp3',
    'music/Sk8er Boi - Avril Lavigne (Lyrics).mp3',
    'music/Stevie Wonder - What Christmas Means To Me (Tamla Records 1967).mp3',
    'music/The Black Eyed Peas - Pump It [Album Version].mp3',
    'music/The Fool On The Hill (Remastered 2009).mp3',
    'music/The Giver (Audio) - Chappell Roan.mp3',
    'music/The Outfield - Your Love (Lyrics).mp3',
    'music/The Rolling Stones - Sympathy For The Devil (Official Lyric Video).mp3',
    'music/The Ronettes - Sleigh Ride (Official Audio).mp3',
    'music/The Who - Baba O\'riley.mp3',
    'music/Timbaland - The Way I Are (Official Music Video) ft. Keri Hilson, D.O.E., Sebastian.mp3',
    'music/Tom Petty- Free Fallin\'.mp3',
    'music/Valerie - Amy Winehouse (Lyrics).mp3',
    'music/Wheatus - Teenage Dirtbag (Official Lyric Video).mp3',
    'music/YUNGBLUD - I Was Made For Lovin\' You (Audio  from The Fall Guy).mp3'
];

// Load random music files for each tile
function loadTileMusicFiles() {
    // Clear existing tile audio
    tileAudioFiles = [];
    tileAudioFileNames = [];
    
    // Shuffle and pick 25 random files (or use all if less than 25)
    const shuffled = [...availableMusicFiles].sort(() => 0.5 - Math.random());
    const selectedFiles = shuffled.slice(0, Math.min(25, shuffled.length));
    
    // If we don't have 25 files, we'll reuse some
    let fileIndex = 0;
    
    // Initialize 6x5 grid
    for (let col = 0; col < 6; col++) {
        tileAudioFiles[col] = [];
        tileAudioFileNames[col] = [];
        for (let row = 0; row < 5; row++) {
            // Cycle through available files if we have fewer than 30
            const filePath = selectedFiles.length > 0 
                ? selectedFiles[fileIndex % selectedFiles.length] 
                : null;
            fileIndex++;
            
            if (filePath) {
                try {
                    const audio = new Audio(filePath);
                    audio.volume = 0.5;
                    audio.preload = 'auto';
                    audio.loop = false;
                    
                    audio.addEventListener('error', (e) => {
                        console.warn(`Could not load music file: ${filePath}`, e);
                        tileAudioFiles[col][row] = null;
                        tileAudioFileNames[col][row] = null;
                    });
                    
                    audio.load();
                    tileAudioFiles[col][row] = audio;
                    
                    // Extract filename from path (remove 'music/' prefix and extension)
                    const fileName = filePath.replace('music/', '').replace(/\.(mp3|wav|ogg|m4a)$/i, '');
                    tileAudioFileNames[col][row] = fileName;
                } catch (error) {
                    console.warn(`Error creating audio for ${filePath}:`, error);
                    tileAudioFiles[col][row] = null;
                    tileAudioFileNames[col][row] = null;
                }
            } else {
                tileAudioFiles[col][row] = null;
                tileAudioFileNames[col][row] = null;
            }
        }
    }
    
    console.log(`Loaded ${selectedFiles.length} music files for 30 tiles`);
}

// Load audio files (use base URL so files load from same origin as the page)
function loadAudioFiles() {
    let base = (document.baseURI || window.location.href).replace(/[#?].*$/, '').trim();
    if (!base.endsWith('/')) base = base.replace(/\/[^/]*$/, '/') || base + '/';
    const wrongSrc = base + WRONG_ANSWER_FILE;
    const rightSrc = base + RIGHT_ANSWER_FILE;
    const transitionSrc = base + SOUND_EFFECTS_FOLDER + encodeURIComponent(CINEMATIC_TRANSITION_FILE);
    try {
        wrongAnswerAudio = new Audio(wrongSrc);
        wrongAnswerAudio.volume = 0.75;
        wrongAnswerAudio.preload = 'auto';
        wrongAnswerAudio.addEventListener('error', () => { wrongAnswerAudio = null; });
        wrongAnswerAudio.load();
    } catch (error) {
        wrongAnswerAudio = null;
    }
    try {
        rightAnswerAudio = new Audio(rightSrc);
        rightAnswerAudio.volume = 0.75;
        rightAnswerAudio.preload = 'auto';
        rightAnswerAudio.addEventListener('error', () => { rightAnswerAudio = null; });
        rightAnswerAudio.load();
    } catch (error) {
        rightAnswerAudio = null;
    }
    try {
        transitionAudio = new Audio(transitionSrc);
        transitionAudio.volume = 0.75;
        transitionAudio.preload = 'auto';
        transitionAudio.addEventListener('error', () => { transitionAudio = null; });
        transitionAudio.load();
    } catch (error) {
        transitionAudio = null;
    }
    
    // Don't load local music files - we only use Spotify playlists from embedded playlists
    // loadTileMusicFiles(); // Disabled - using Spotify playlists only
}

/**
 * MUSIC PLAYBACK CRITERIA (landing + trivia)
 * When changing playback, fade, or stop logic, ensure ALL of these still hold:
 * 1. Start at the beginning – every song (landing playlist + tile) must start at position 0. (Use position_ms: 0 in play body only; no seek after play – seek can stop playback.)
 * 2. Play when triggered – songs must play reliably when clicked/triggered with no issues. (moveOnSafetyStopTimeout must be cleared when starting a new tile so the 600ms delayed stop never kills the new track.)
 * 3. Fade out and stop when triggered – Move on / leave winner / leave landing must fade and stop correctly.
 * 4. No stutter or glitch on initial play – playback must start smoothly without stutter or glitch.
 * Fixes for one criterion must not break another (e.g. fixing stutter must not break start-from-beginning or fade/stop).
 * Diagnostics: [Music] console.warn logs (play/pause/state/start-from-middle) inform failure model; light retry when 204 but not started.
 * "Started" = expected URI playing, OR same title + artist playing (Spotify track relinking plays a different URI for
 *   the same song; treating that as failure caused retries that restarted/stalled a song that was already playing).
 * tilePlaybackGeneration: every tile play, fade and stop bumps it; in-flight attempts abort when it changes.
 * If a tile's song truly won't start, playTileMusic swaps in another song from the same category + value (up to 2 tries).
 */

// Play music for a specific tile
/**
 * Pick a substitute track for a tile whose song won't play: same category, same value bucket,
 * not already on the board and not already tried. Returns null if none is available.
 */
function pickReplacementTrackForTile(categoryIndex, valueIndex, triedUris) {
    const pool = categoryPlaylists[categoryIndex];
    if (!Array.isArray(pool) || pool.length === 0) return null;
    const onBoard = new Set();
    tileSpotifyTracks.forEach(col => (col || []).forEach(t => { if (t && t.uri) onBoard.add(t.uri); }));
    const usable = (t) => t && t.uri && !onBoard.has(t.uri) && !triedUris.has(t.uri);
    let candidates = pool.filter(t => usable(t) && t.valueBucket === valueIndex);
    if (candidates.length === 0) candidates = pool.filter(usable); // tiny playlist: any unused song from the category
    if (candidates.length === 0) return null;
    return candidates[Math.floor(Math.random() * candidates.length)];
}

async function playTileMusic(categoryIndex, valueIndex) {
    // New tile = new playback generation; any older in-flight attempt sees the change and aborts.
    const myGeneration = ++tilePlaybackGeneration;
    const isCurrent = () => tilePlaybackGeneration === myGeneration;
    try {
        // Cancel any pending "stop 600ms after Move on" so we never stop this new track (criterion #2)
        if (moveOnSafetyStopTimeout) {
            clearTimeout(moveOnSafetyStopTimeout);
            moveOnSafetyStopTimeout = null;
        }
        // Initialize audio context first
        initAudioContext();

        // Prevent any pending landing/title-song fade from interfering with the first tile song.
        cancelPendingLandingSpotifyFade();
        
        // Clear any existing fade out interval first (don't pause here – playSpotifyTrackOnActiveDevice does one pause + settle to avoid stutter)
        if (fadeOutInterval) {
            clearInterval(fadeOutInterval);
            fadeOutInterval = null;
        }
        
        // Try Spotify first - use pre-assigned song for this tile
        // If using selected playlists (6 selected), only use Spotify, not local files
        if (spotifyReady && spotifyDeviceId && selectedCategoryPlaylists.length === 6) {
            // Use the pre-assigned track for this tile (assigned when board was created)
            const track = tileSpotifyTracks[categoryIndex] && tileSpotifyTracks[categoryIndex][valueIndex];
            
            // If track is pre-assigned, use it
            if (track) {
                const expectedCategoryName = selectedCategoryNames[categoryIndex] || gameBoard[categoryIndex]?.category || 'unknown';
                
                console.log(`\n=== PLAYING TRACK ===`);
                console.log(`[playTileMusic] categoryIndex=${categoryIndex}, valueIndex=${valueIndex}`);
                console.log(`[playTileMusic] Expected category name: "${expectedCategoryName}"`);
                console.log(`[playTileMusic] ✓ Using pre-assigned track: "${track.name} - ${track.artist}"`);
                console.log(`[playTileMusic] ✓ This track is from playlist: "${expectedCategoryName}"`);
                
                currentPlayingTrack = track;
                
                // Track name and album cover are already stored during initGame(), but verify
                if (!tileAudioFileNames[categoryIndex] || !tileAudioFileNames[categoryIndex][valueIndex]) {
                    if (!tileAudioFileNames[categoryIndex]) {
                        tileAudioFileNames[categoryIndex] = [];
                    }
                    if (!tileAlbumCovers[categoryIndex]) {
                        tileAlbumCovers[categoryIndex] = [];
                    }
                    tileAudioFileNames[categoryIndex][valueIndex] = `${track.name} - ${track.artist}`;
                    tileAlbumCovers[categoryIndex][valueIndex] = track.albumCover || null;
                }
                console.log(`Track name for [${categoryIndex}][${valueIndex}]: ${tileAudioFileNames[categoryIndex][valueIndex]}`);
                
                try {
                    const result = await playSpotifyTrackOnActiveDevice(track, { isCurrent });
                    if (result.superseded) {
                        console.log(`[playTileMusic] Attempt for "${track.name}" superseded by a newer click/stop; abandoning it.`);
                        return;
                    }
                    if (result.ok) {
                        console.log(`✓ Playing Spotify track: ${track.name} - ${track.artist}`);
                        return;
                    } else {
                        console.error(`Failed to play Spotify track (${result.status}):`, result.errorText);
                        // Safety net: swap in another song from the same category + dollar value so the game doesn't stall.
                        // The tile's stored track/name/cover are updated BEFORE the modal opens, so the answer reveal matches what plays.
                        const tried = new Set([track.uri]);
                        for (let swap = 0; swap < 2 && isCurrent(); swap++) {
                            const replacement = pickReplacementTrackForTile(categoryIndex, valueIndex, tried);
                            if (!replacement) break;
                            tried.add(replacement.uri);
                            console.warn(`[playTileMusic] Swapping unplayable "${track.name} - ${track.artist}" for "${replacement.name} - ${replacement.artist}"`);
                            tileSpotifyTracks[categoryIndex][valueIndex] = replacement;
                            if (!tileAudioFileNames[categoryIndex]) tileAudioFileNames[categoryIndex] = [];
                            if (!tileAlbumCovers[categoryIndex]) tileAlbumCovers[categoryIndex] = [];
                            tileAudioFileNames[categoryIndex][valueIndex] = `${replacement.name} - ${replacement.artist}`;
                            tileAlbumCovers[categoryIndex][valueIndex] = replacement.albumCover || null;
                            currentPlayingTrack = replacement;
                            // retryOnce:false keeps the swap quick – one play + check, no device re-transfer.
                            const swapResult = await playSpotifyTrackOnActiveDevice(replacement, { isCurrent, retryOnce: false });
                            if (swapResult.superseded) return;
                            if (swapResult.ok) {
                                console.log(`✓ Playing replacement Spotify track: ${replacement.name} - ${replacement.artist}`);
                                return;
                            }
                        }
                        // If using selected playlists, don't fall back to local files - just return
                        if (selectedCategoryPlaylists.length === 6) {
                            console.warn('Spotify playback failed, but using selected playlists - not falling back to local files');
                            return;
                        }
                    }
                } catch (error) {
                    console.error('Error playing Spotify track:', error);
                    // If using selected playlists, don't fall back to local files - just return
                    if (selectedCategoryPlaylists.length === 6) {
                        console.warn('Spotify playback error, but using selected playlists - not falling back to local files');
                        return;
                    }
                }
            } else {
                // Track not pre-assigned but we're using selected playlists - try to get a random track from the category playlist
                console.warn(`[playTileMusic] No pre-assigned track for [${categoryIndex}][${valueIndex}], trying to get from categoryPlaylists`);
                if (categoryPlaylists[categoryIndex] && categoryPlaylists[categoryIndex].length > 0) {
                    const categoryTracks = categoryPlaylists[categoryIndex];
                    const randomIndex = Math.floor(Math.random() * categoryTracks.length);
                    const track = categoryTracks[randomIndex];
                    
                    try {
                        const result = await playSpotifyTrackOnActiveDevice(track);
                        if (result.ok) {
                            console.log(`✓ Playing Spotify track (fallback): ${track.name} - ${track.artist}`);
                            currentPlayingTrack = track;
                            return;
                        } else {
                            console.error(`Failed to play fallback Spotify track (${result.status}):`, result.errorText);
                        }
                    } catch (error) {
                        console.error('Error playing fallback Spotify track:', error);
                    }
                }
                console.error(`[playTileMusic] Cannot play track - no pre-assigned track and cannot get from categoryPlaylists`);
                return; // Don't fall back to local files when using selected playlists
            }
        }
        
        // Fallback: Try selected playlist if category playlist not available (only if not using selected playlists)
        if (selectedCategoryPlaylists.length !== 6 && spotifyReady && spotifyDeviceId && selectedPlaylistTracks && selectedPlaylistTracks.length > 0) {
            // Pick a random track from the selected playlist
            const randomIndex = Math.floor(Math.random() * selectedPlaylistTracks.length);
            const track = selectedPlaylistTracks[randomIndex];
            currentPlayingTrack = track;
            
            // Store the track name and album cover for display (do this BEFORE playing)
            if (!tileAudioFileNames[categoryIndex]) {
                tileAudioFileNames[categoryIndex] = [];
            }
            if (!tileAlbumCovers[categoryIndex]) {
                tileAlbumCovers[categoryIndex] = [];
            }
            tileAudioFileNames[categoryIndex][valueIndex] = `${track.name} - ${track.artist}`;
            tileAlbumCovers[categoryIndex][valueIndex] = track.albumCover || null;
            console.log(`Stored track name for [${categoryIndex}][${valueIndex}]: ${tileAudioFileNames[categoryIndex][valueIndex]}`);
            
            try {
                const result = await playSpotifyTrackOnActiveDevice(track);
                if (result.ok) {
                    console.log(`✓ Playing Spotify track: ${track.name} - ${track.artist}`);
                    return;
                } else {
                    console.error(`Failed to play Spotify track (${result.status}):`, result.errorText);
                    // Don't fall back to local files if Spotify fails
                    return;
                }
            } catch (error) {
                console.error('Error playing Spotify track:', error);
                // Don't fall back to local files if Spotify fails
                return;
            }
        }
        
        // Only use local audio files if NOT using selected Spotify playlists
        if (selectedCategoryPlaylists.length !== 6) {
            // Fallback: Try pre-assigned Spotify track if available
            if (spotifyReady && spotifyDeviceId && tileSpotifyTracks[categoryIndex] && tileSpotifyTracks[categoryIndex][valueIndex]) {
                const track = tileSpotifyTracks[categoryIndex][valueIndex];
                currentPlayingTrack = track;
                
                try {
                    // Stop any currently playing track (Web API only — SDK pause can throw)
                    if (spotifyDeviceId && spotifyAccessToken) {
                        await spotifyFetch(`https://api.spotify.com/v1/me/player/pause?device_id=${spotifyDeviceId}`, {
                            method: 'PUT'
                        }).catch(() => {});
                    }
                    
                    const result = await playSpotifyTrackOnActiveDevice(track);
                    if (result.ok) {
                        console.log(`Playing Spotify track: ${track.name} - ${track.artist}`);
                        return;
                    }
                    console.error(`Failed to play Spotify track (${result.status}):`, result.errorText);
                } catch (error) {
                    console.error('Error playing Spotify track:', error);
                    // Continue to local files fallback (only if not using selected playlists)
                }
            }
            
            // Fallback to local audio files (only if not using selected playlists)
            // Stop any currently playing song
            if (currentPlayingAudio && !currentPlayingAudio.paused) {
                currentPlayingAudio.pause();
                currentPlayingAudio.currentTime = 0;
            }
            
            // Get the audio for this specific tile
            const tileAudio = tileAudioFiles[categoryIndex] && tileAudioFiles[categoryIndex][valueIndex];
            
            if (tileAudio) {
                // Reset to beginning, restore volume
                tileAudio.currentTime = 0;
                tileAudio.volume = 0.5; // Reset to original volume
                currentPlayingAudio = tileAudio;
                
                // Play the audio directly (no waveform - works with file:// protocol)
                console.log('Attempting to play audio:', tileAudio.src);
                console.log('Audio element state before play:', {
                    paused: tileAudio.paused,
                    readyState: tileAudio.readyState,
                    volume: tileAudio.volume
                });
                
                const playPromise = tileAudio.play();
                
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        // Audio is playing
                        console.log(`Successfully playing music for tile [${categoryIndex}][${valueIndex}]`);
                        console.log('Audio element state after play:', {
                            paused: tileAudio.paused,
                            currentTime: tileAudio.currentTime,
                            volume: tileAudio.volume,
                            readyState: tileAudio.readyState
                        });
                    }).catch(error => {
                        console.error('Could not play tile music file:', error);
                        console.error('Audio element error details:', {
                            src: tileAudio.src,
                            paused: tileAudio.paused,
                            readyState: tileAudio.readyState,
                            error: tileAudio.error
                        });
                        // Fallback to generated sound (only if not using selected playlists)
                        if (selectedCategoryPlaylists.length !== 6) {
                            playGeneratedLevels();
                        }
                    });
                } else {
                    console.warn('play() did not return a promise');
                }
            } else {
                console.warn('Tile music file not loaded, using generated sound');
                // Fallback to generated sound (only if not using selected playlists)
                if (selectedCategoryPlaylists.length !== 6) {
                    playGeneratedLevels();
                }
            }
        }
    } catch (error) {
        console.error('Error playing tile music:', error);
        // Fallback to generated sound (only if not using selected playlists)
        if (selectedCategoryPlaylists.length !== 6) {
            playGeneratedLevels();
        }
    }
}

// Fade out background music
function fadeOutBackgroundMusic() {
    if (!backgroundMusic || backgroundMusic.paused) {
        return;
    }
    
    const fadeDuration = 1500; // 1.5 seconds
    const fadeSteps = 30;
    const volumeStep = backgroundMusic.volume / fadeSteps;
    const timeStep = fadeDuration / fadeSteps;
    
    let currentStep = 0;
    const fadeInterval = setInterval(() => {
        if (!backgroundMusic) {
            clearInterval(fadeInterval);
            return;
        }
        currentStep++;
        backgroundMusic.volume = Math.max(0, backgroundMusic.volume - volumeStep);
        
        if (currentStep >= fadeSteps || backgroundMusic.volume <= 0) {
            clearInterval(fadeInterval);
            if (backgroundMusic) {
                backgroundMusic.pause();
                backgroundMusic.currentTime = 0;
                backgroundMusic.volume = 0.5; // Reset volume for next time
            }
        }
    }, timeStep);
}

// Fade out Spotify playback (landing playlist) when entering the trivia game board
function cancelPendingLandingSpotifyFade() {
    if (landingSpotifyFadeOutTimeout) {
        clearTimeout(landingSpotifyFadeOutTimeout);
        landingSpotifyFadeOutTimeout = null;
    }
    if (landingSpotifyFadeOutInterval) {
        clearInterval(landingSpotifyFadeOutInterval);
        landingSpotifyFadeOutInterval = null;
    }
}

async function fadeOutSpotifyPlayback() {
    cancelPendingLandingSpotifyFade();
    await ensureValidSpotifyAccessToken();
    if (!spotifyAccessToken || !spotifyDeviceId) return;
    const fadeDuration = 1500;
    const fadeSteps = 5; // Fewer steps to avoid Spotify 429 rate limit (was 30)
    const timeStep = fadeDuration / fadeSteps;
    let currentStep = 0;
    landingSpotifyFadeOutInterval = setInterval(async () => {
        currentStep++;
        const volumePercent = Math.max(0, Math.round(100 * (1 - currentStep / fadeSteps)));
        spotifyFetch(`https://api.spotify.com/v1/me/player/volume?volume_percent=${volumePercent}&device_id=${spotifyDeviceId}`, {
            method: 'PUT'
        }).catch(() => {});
        if (currentStep >= fadeSteps) {
            clearInterval(landingSpotifyFadeOutInterval);
            landingSpotifyFadeOutInterval = null;
            try {
                await spotifyFetch(`https://api.spotify.com/v1/me/player/pause?device_id=${spotifyDeviceId}`, {
                    method: 'PUT'
                });
            } catch (e) {
                // ignore
            }
            try {
                await spotifyFetch(`https://api.spotify.com/v1/me/player/volume?volume_percent=100&device_id=${spotifyDeviceId}`, {
                    method: 'PUT'
                });
            } catch (e) {
                // ignore
            }
        }
    }, timeStep);
}

// Resume background music (for landing/category pages)
function resumeBackgroundMusic() {
    if (backgroundMusic && backgroundMusicStarted) {
        backgroundMusic.volume = 0.5;
        backgroundMusic.play().catch(() => {
            backgroundMusic = null;
        });
    }
}

// Stop/reset background music (used to keep landing page silent)
function stopBackgroundMusic() {
    if (!backgroundMusic) return;
    try {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
        backgroundMusic.volume = 0.5;
    } catch (e) {
        // ignore
    }
    backgroundMusicStarted = false;
}

async function ensureSpotifyPlaybackDeviceReady(forceTransfer = false) {
    await ensureValidSpotifyAccessToken();
    if (!spotifyAccessToken || !spotifyDeviceId) return false;

    try {
        if (spotifyPlayer && typeof spotifyPlayer.activateElement === 'function') {
            await spotifyPlayer.activateElement();
        }
    } catch (e) {
        // ignore; transfer below is the more important step
    }

    if (forceTransfer || !spotifyDevicePrimed) {
        try {
            await spotifyFetch('https://api.spotify.com/v1/me/player', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    device_ids: [spotifyDeviceId],
                    play: false
                })
            });
        } catch (e) {
            // ignore
        }

        // Give Spotify a moment to activate the transferred device before first play.
        // Use a longer delay when the device was just primed (first play after connect) to avoid first-load no-play.
        const settleMs = !spotifyDevicePrimed ? 500 : 250;
        await new Promise(resolve => setTimeout(resolve, settleMs));
    }
    return true;
}

async function setSpotifyPlaybackVolume(volumePercent = 100) {
    if (!spotifyAccessToken || !spotifyDeviceId) return;
    try {
        await spotifyFetch(`https://api.spotify.com/v1/me/player/volume?volume_percent=${volumePercent}&device_id=${spotifyDeviceId}`, {
            method: 'PUT'
        });
    } catch (e) {
        // ignore
    }
}

/** Seek Spotify playback to the start (position 0). Call after play to ensure track starts at beginning. */
async function seekSpotifyToStart() {
    if (!spotifyAccessToken || !spotifyDeviceId) return;
    try {
        await spotifyFetch(`https://api.spotify.com/v1/me/player/seek?position_ms=0&device_id=${spotifyDeviceId}`, {
            method: 'PUT'
        });
    } catch (e) {
        // ignore
    }
}

/** Parse Retry-After header (seconds or date); return wait time in ms. Default 2s for 429. */
function getSpotifyRetryAfterMs(response, defaultMs = 2000) {
    if (!response || !response.headers) return defaultMs;
    const h = response.headers.get('Retry-After');
    if (!h) return defaultMs;
    const n = parseInt(h, 10);
    if (!isNaN(n)) return Math.min(n * 1000, 10000); // cap 10s
    try {
        const d = new Date(h).getTime();
        if (!isNaN(d)) return Math.max(0, Math.min(d - Date.now(), 10000));
    } catch (e) { /* ignore */ }
    return defaultMs;
}

async function getSpotifyPlaybackState() {
    try {
        const response = await spotifyFetch('https://api.spotify.com/v1/me/player');
        if (!response.ok) return null;
        return await response.json();
    } catch (e) {
        return null;
    }
}

/** Lowercase song title with version/remaster/feat. suffixes and punctuation removed, for loose comparison. */
function normalizeSongTitleForMatch(title) {
    return String(title || '')
        .toLowerCase()
        .replace(/\s+-\s+.*$/, '')      // " - 2012 Remaster", " - Single Version", " - 7\" Single Version"
        .replace(/\([^)]*\)|\[[^\]]*\]/g, '') // "(feat. X)", "[Remastered]"
        .replace(/[^a-z0-9]+/g, '');
}

/**
 * Is the expected song the item in this playback state?
 * Exact URI match, OR same title + overlapping artist. The second case covers Spotify "track relinking":
 * when the exact version in a playlist isn't playable in the user's market, Spotify silently plays an
 * equivalent version that has a different URI. Without this, the song plays but we think it failed.
 */
function playbackStateMatchesTrack(state, expectedTrack) {
    const item = state && state.item;
    if (!item || !expectedTrack) return { matches: false, relinked: false };
    if (item.uri === expectedTrack.uri) return { matches: true, relinked: false };
    if (!expectedTrack.name) return { matches: false, relinked: false };
    const sameTitle = normalizeSongTitleForMatch(item.name) === normalizeSongTitleForMatch(expectedTrack.name)
        && normalizeSongTitleForMatch(item.name) !== '';
    const expectedArtists = String(expectedTrack.artist || '').toLowerCase();
    const artistOverlap = (item.artists || []).some(a => a && a.name && expectedArtists.includes(a.name.toLowerCase()));
    return sameTitle && artistOverlap ? { matches: true, relinked: true } : { matches: false, relinked: false };
}

/**
 * Poll until the expected song is playing on our device.
 * expected: a track object {uri, name, artist} (preferred) or a bare URI string (exact match only).
 * isCurrent: optional () => boolean; when it returns false the attempt was superseded and we stop polling.
 */
async function waitForSpotifyTrackToStart(expected, attempts = 5, delayMs = 175, isCurrent = null) {
    const expectedTrack = typeof expected === 'string' ? { uri: expected } : expected;
    let lastState = null;
    for (let i = 0; i < attempts; i++) {
        if (isCurrent && !isCurrent()) return false;
        const state = await getSpotifyPlaybackState();
        lastState = state;
        const isPlaying = !!(state && state.is_playing);
        const deviceMatches = !spotifyDeviceId || !state || !state.device || state.device.id === spotifyDeviceId;
        const match = playbackStateMatchesTrack(state, expectedTrack);

        if (match.matches && isPlaying && deviceMatches) {
            if (match.relinked) {
                console.warn('[Music] Spotify is playing a different version of this song (relinked); accepting it. ' + JSON.stringify({
                    requested_uri: expectedTrack.uri,
                    playing_uri: state.item.uri,
                    playing: `${state.item.name} - ${(state.item.artists || []).map(a => a.name).join(', ')}`
                }));
            }
            return true;
        }

        if (i < attempts - 1) {
            await new Promise(resolve => setTimeout(resolve, delayMs));
        }
    }
    // Diagnostic: log last state when we give up (informs failure model). Stringified so the console shows it without expanding.
    if (lastState != null) {
        console.warn('[Music] waitForSpotifyTrackToStart failed ' + JSON.stringify({
            expectedUri: expectedTrack.uri,
            expectedSong: expectedTrack.name ? `${expectedTrack.name} - ${expectedTrack.artist}` : null,
            currentUri: lastState.item ? lastState.item.uri : null,
            currentSong: lastState.item ? `${lastState.item.name} - ${(lastState.item.artists || []).map(a => a.name).join(', ')}` : null,
            is_playing: lastState.is_playing,
            position_ms: lastState.progress_ms,
            device_matches: !lastState.device || !spotifyDeviceId || lastState.device.id === spotifyDeviceId
        }));
    }
    return false;
}

/** Used by both landing playlist and tile playback. Must satisfy MUSIC PLAYBACK CRITERIA (see above). */
async function playSpotifyTrackOnActiveDevice(track, options = {}) {
    await ensureValidSpotifyAccessToken();
    const { retryOnce = true, waitLongerForStart = false, retried429 = false, isCurrent = null } = options;
    if (!spotifyAccessToken || !spotifyDeviceId || !track || !track.uri) {
        return { ok: false, status: 0, errorText: 'Missing Spotify device or track URI' };
    }
    // Superseded = user clicked another tile or moved on while this attempt was in flight. Stop touching the player.
    const superseded = () => !!(isCurrent && !isCurrent());
    const SUPERSEDED_RESULT = { ok: false, status: 0, errorText: 'Superseded by a newer play/stop request', superseded: true };

    await ensureSpotifyPlaybackDeviceReady(false);
    if (superseded()) return SUPERSEDED_RESULT;
    let setVolRes = null;
    try {
        setVolRes = await spotifyFetch(`https://api.spotify.com/v1/me/player/volume?volume_percent=100&device_id=${spotifyDeviceId}`, {
            method: 'PUT'
        });
    } catch (e) { /* ignore */ }
    if (setVolRes && setVolRes.status === 429 && !retried429) {
        const waitMs = getSpotifyRetryAfterMs(setVolRes);
        console.warn('[Music] 429 on setVolume, waiting', waitMs, 'ms then retrying');
        await new Promise(r => setTimeout(r, waitMs));
        return playSpotifyTrackOnActiveDevice(track, { ...options, retried429: true });
    }

    // Only pause if something is actually playing – avoids unnecessary API call when idle (criterion #4). If state unknown (null), pause anyway to be safe.
    const stateBefore = await getSpotifyPlaybackState();
    if (!stateBefore || stateBefore.is_playing) {
        try {
            const pauseRes = await spotifyFetch(`https://api.spotify.com/v1/me/player/pause?device_id=${spotifyDeviceId}`, {
                method: 'PUT'
            });
            if (pauseRes.status === 429 && !retried429) {
                const waitMs = getSpotifyRetryAfterMs(pauseRes);
                console.warn('[Music] 429 on pause, waiting', waitMs, 'ms then retrying play flow');
                await new Promise(r => setTimeout(r, waitMs));
                return playSpotifyTrackOnActiveDevice(track, { ...options, retried429: true });
            }
            if (!pauseRes.ok) {
                console.warn('[Music] pause before play failed', { status: pauseRes.status });
            }
        } catch (e) { /* ignore */ }
        await new Promise(r => setTimeout(r, 100));
    }

    if (superseded()) return SUPERSEDED_RESULT;
    const response = await spotifyFetch(`https://api.spotify.com/v1/me/player/play?device_id=${spotifyDeviceId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            uris: [track.uri],
            position_ms: 0
        })
    });

    const waitAttempts = waitLongerForStart ? 10 : 5;
    const waitDelayMs = waitLongerForStart ? 250 : 175;

    if (response.ok) {
        spotifyDevicePrimed = true;
        const playbackStarted = await waitForSpotifyTrackToStart(track, waitAttempts, waitDelayMs, isCurrent);
        if (superseded()) return SUPERSEDED_RESULT;
        if (playbackStarted) {
            // Criterion #1: log if track may have started from middle (position_ms not 0)
            const stateAfter = await getSpotifyPlaybackState();
            if (stateAfter && stateAfter.progress_ms != null && stateAfter.progress_ms > 500) {
                console.warn('[Music] possible start-from-middle', { uri: track.uri, position_ms: stateAfter.progress_ms });
            }
            return { ok: true, status: response.status, errorText: '' };
        }

        // Diagnostic: log why playback didn't start (informs failure model)
        const stateFail = await getSpotifyPlaybackState();
        console.warn('[Music] play 204 but playback did not start ' + JSON.stringify({
            uri: track.uri,
            song: `${track.name} - ${track.artist}`,
            position_ms: stateFail ? stateFail.progress_ms : null,
            is_playing: stateFail ? stateFail.is_playing : null,
            current_uri: stateFail && stateFail.item ? stateFail.item.uri : null
        }));

        // Light retry: one more play after short delay (no transfer) – often fixes race
        if (retryOnce) {
            await new Promise(r => setTimeout(r, 300));
            if (superseded()) return SUPERSEDED_RESULT;
            const play2Res = await spotifyFetch(`https://api.spotify.com/v1/me/player/play?device_id=${spotifyDeviceId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ uris: [track.uri], position_ms: 0 })
            });
            if (play2Res.ok) {
                const started2 = await waitForSpotifyTrackToStart(track, waitAttempts + 2, waitDelayMs, isCurrent);
                if (superseded()) return SUPERSEDED_RESULT;
                if (started2) {
                    return { ok: true, status: play2Res.status, errorText: '' };
                }
            }
        }

        // Treat "accepted but not actually playing" the same as a transient failure.
        if (!retryOnce) {
            return { ok: false, status: response.status, errorText: 'Spotify accepted play request, but playback did not actually start.' };
        }
    } else {
        console.warn('[Music] play request failed', { status: response.status });
        if (response.status === 429 && !retried429) {
            const waitMs = getSpotifyRetryAfterMs(response);
            console.warn('[Music] 429 on play, waiting', waitMs, 'ms then retrying');
            await new Promise(r => setTimeout(r, waitMs));
            return playSpotifyTrackOnActiveDevice(track, { ...options, retried429: true });
        }
    }

    const errorText = response.ok
        ? 'Spotify accepted play request, but playback did not actually start.'
        : (await response.text()) || '';

    // The first play after a new game can race device activation.
    // If Spotify has not fully switched to this device yet, or accepted the request without starting,
    // transfer and retry once.
    if (retryOnce && (response.ok || [404, 502, 503].includes(response.status))) {
        if (superseded()) return SUPERSEDED_RESULT;
        await ensureSpotifyPlaybackDeviceReady(true);
        if (superseded()) return SUPERSEDED_RESULT;
        await setSpotifyPlaybackVolume(100);
        const stateRetry = await getSpotifyPlaybackState();
        if (!stateRetry || stateRetry.is_playing) {
            try {
                const pauseRetryRes = await spotifyFetch(`https://api.spotify.com/v1/me/player/pause?device_id=${spotifyDeviceId}`, {
                    method: 'PUT'
                });
                if (!pauseRetryRes.ok) {
                    console.warn('[Music] pause before retry play failed', { status: pauseRetryRes.status });
                }
            } catch (e) { /* ignore */ }
            await new Promise(r => setTimeout(r, 100));
        }

        if (superseded()) return SUPERSEDED_RESULT;
        const retryResponse = await spotifyFetch(`https://api.spotify.com/v1/me/player/play?device_id=${spotifyDeviceId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uris: [track.uri],
                position_ms: 0
            })
        });

        if (retryResponse.ok) {
            spotifyDevicePrimed = true;
            const retryWaitAttempts = waitLongerForStart ? 12 : 6;
            const retryWaitDelayMs = waitLongerForStart ? 250 : 200;
            const retryStarted = await waitForSpotifyTrackToStart(track, retryWaitAttempts, retryWaitDelayMs, isCurrent);
            if (superseded()) return SUPERSEDED_RESULT;
            if (retryStarted) {
                const stateAfterRetry = await getSpotifyPlaybackState();
                if (stateAfterRetry && stateAfterRetry.progress_ms != null && stateAfterRetry.progress_ms > 500) {
                    console.warn('[Music] possible start-from-middle (after retry)', { uri: track.uri, position_ms: stateAfterRetry.progress_ms });
                }
                return { ok: true, status: retryResponse.status, errorText: '' };
            }

            console.warn('[Music] retry play 204 but playback still did not start ' + JSON.stringify({ uri: track.uri, song: `${track.name} - ${track.artist}` }));
            return {
                ok: false,
                status: retryResponse.status,
                errorText: 'Spotify accepted retry play request, but playback still did not start.'
            };
        }

        return {
            ok: false,
            status: retryResponse.status,
            errorText: await retryResponse.text()
        };
    }

    return { ok: false, status: response.status, errorText };
}

function getLargestSpotifyImageUrl(images) {
    if (!Array.isArray(images) || images.length === 0) return null;

    const largestImage = images.reduce((best, current) => {
        if (!best) return current;
        const bestArea = (best.width || 0) * (best.height || 0);
        const currentArea = (current.width || 0) * (current.height || 0);
        return currentArea > bestArea ? current : best;
    }, null);

    return largestImage && largestImage.url ? largestImage.url : null;
}

function isLandingPageCurrentlyVisible() {
    const landingPage = document.getElementById('landingPage');
    return landingPage &&
        landingPage.style.display !== 'none' &&
        getComputedStyle(landingPage).display !== 'none';
}

function clearLandingPlaybackGestureFallback() {
    hideTapToStartMusicHint();
    if (landingPlaybackGestureCleanup) {
        landingPlaybackGestureCleanup();
        landingPlaybackGestureCleanup = null;
    }
}

function armLandingPlaybackGestureFallback() {
    if (landingPlaybackGestureCleanup) return;

    const retryOnGesture = async () => {
        if (!landingPlaybackStartPending || landingPlaybackStartInProgress) return;
        landingPlaybackStartInProgress = true;
        hideTapToStartMusicHint();
        try {
            // Unlock Web Playback SDK for playback (browser may block until user gesture).
            // Must be called synchronously inside the gesture handler, i.e. before any other await.
            if (spotifyPlayer && typeof spotifyPlayer.activateElement === 'function') {
                try { await spotifyPlayer.activateElement(); } catch (e) { /* ignore */ }
            }
            landingAutoplayBlocked = false; // a real click/keypress unlocks audio for this tab
            console.log('[Landing] Retrying landing song after user click/keypress');
            const started = await playRandomTrackFromLandingPlaylist();
            if (started && !landingAutoplayBlocked) {
                landingPlaybackStartPending = false;
                clearLandingPlaybackGestureFallback();
            } else if (landingAutoplayBlocked) {
                showTapToStartMusicHint();
            }
        } finally {
            landingPlaybackStartInProgress = false;
        }
    };

    const pointerHandler = () => { retryOnGesture(); };
    const keyHandler = () => { retryOnGesture(); };

    document.addEventListener('pointerdown', pointerHandler);
    document.addEventListener('keydown', keyHandler);

    landingPlaybackGestureCleanup = () => {
        document.removeEventListener('pointerdown', pointerHandler);
        document.removeEventListener('keydown', keyHandler);
    };
}

async function startLandingPlaybackAfterConnect() {
    if (spotifyReady && spotifyDeviceId && !landingAutoplayBlocked) {
        const state = await getSpotifyPlaybackState();
        if (state && state.is_playing) {
            landingPlaybackStartPending = false;
            clearLandingPlaybackGestureFallback();
            return true;
        }
    }

    landingPlaybackStartPending = true;
    armLandingPlaybackGestureFallback();
    if (landingAutoplayBlocked) {
        // Automatic retries can't get past the browser's block; only a click/keypress can.
        showTapToStartMusicHint();
        return false;
    }

    // Give the Web Playback SDK device time to be ready after 'ready' (avoids first-load no-play with no errors).
    // Retries at 0ms, 500ms, 1.5s, 3s so we don't race the device on cold start.
    const retryDelays = [0, 500, 1500, 3000];
    for (const delayMs of retryDelays) {
        if (!landingPlaybackStartPending) return true;
        if (delayMs > 0) {
            await new Promise(resolve => setTimeout(resolve, delayMs));
        }
        if (!landingPlaybackStartPending || landingPlaybackStartInProgress) continue;

        landingPlaybackStartInProgress = true;
        try {
            const started = await playRandomTrackFromLandingPlaylist();
            if (started && !landingAutoplayBlocked) {
                landingPlaybackStartPending = false;
                clearLandingPlaybackGestureFallback();
                return true;
            }
            if (landingAutoplayBlocked) {
                // Spotify says "playing" but the browser is holding the sound. Keep the fallback armed and stop
                // retrying automatically; the next click/keypress starts the music.
                console.warn('[Landing] Browser is blocking sound; waiting for a click/keypress');
                showTapToStartMusicHint();
                return false;
            }
            console.warn(`[Landing] Automatic attempt after ${delayMs}ms did not start`);
        } finally {
            landingPlaybackStartInProgress = false;
        }
    }

    // Every automatic attempt failed. The click/keypress fallback is still armed; tell the user to tap.
    if (landingPlaybackStartPending) {
        console.warn('[Landing] All automatic attempts failed; waiting for a click/keypress');
        showTapToStartMusicHint();
    }
    return false;
}

/** Fade out then stop tile/Spotify playback. Part of MUSIC PLAYBACK CRITERIA #3 – must not break #1, #2, #4. */
async function fadeOutTileMusic() {
    // Cancel any tile play attempt still retrying, so it can't restart music after this fade (criterion #3).
    tilePlaybackGeneration++;
    await ensureValidSpotifyAccessToken();
    return new Promise((resolve) => {
        // Clear any existing fade out interval
        if (fadeOutInterval) {
            clearInterval(fadeOutInterval);
            fadeOutInterval = null;
        }
        
        let fadeCompleted = false;
        const completeFade = (success = true) => {
            if (!fadeCompleted) {
                fadeCompleted = true;
                if (fadeOutInterval) {
                    clearInterval(fadeOutInterval);
                    fadeOutInterval = null;
                }
                resolve(success);
            }
        };

        // Fade out Spotify track/device — Web API only (SDK setVolume is broken and throws)
        if (spotifyAccessToken && spotifyDeviceId) {
            console.log('Fading out Spotify playback');

            const fadeDuration = 800; // 800ms fade out
            const fadeSteps = 2; // Only 2 volume API calls to avoid 429 (50% then 0%)
            const timeStep = fadeDuration / fadeSteps;

            let currentStep = 0;
            fadeOutInterval = setInterval(async () => {
                currentStep++;
                const volumePercent = Math.max(0, Math.round(100 * (1 - currentStep / fadeSteps)));

                spotifyFetch(`https://api.spotify.com/v1/me/player/volume?volume_percent=${volumePercent}&device_id=${spotifyDeviceId}`, {
                    method: 'PUT'
                }).catch(() => {});

                if (currentStep >= fadeSteps) {
                    clearInterval(fadeOutInterval);
                    fadeOutInterval = null;

                    currentPlayingTrack = null;

                    // Pause then restore volume. On 429, wait and retry so playback actually stops.
                    let pauseSucceeded = false;
                    try {
                        let pauseRes = await spotifyFetch(`https://api.spotify.com/v1/me/player/pause?device_id=${spotifyDeviceId}`, {
                            method: 'PUT'
                        });
                        if (pauseRes.status === 429) {
                            const waitMs = getSpotifyRetryAfterMs(pauseRes);
                            console.warn('[Music] 429 on fade pause, waiting', waitMs, 'ms then retrying');
                            await new Promise(r => setTimeout(r, waitMs));
                            pauseRes = await spotifyFetch(`https://api.spotify.com/v1/me/player/pause?device_id=${spotifyDeviceId}`, {
                                method: 'PUT'
                            });
                        }
                        pauseSucceeded = pauseRes.ok;
                    } catch (e) {
                        // ignore
                    }

                    try {
                        let volRes = await spotifyFetch(`https://api.spotify.com/v1/me/player/volume?volume_percent=100&device_id=${spotifyDeviceId}`, {
                            method: 'PUT'
                        });
                        if (volRes.status === 429) {
                            await new Promise(r => setTimeout(r, getSpotifyRetryAfterMs(volRes)));
                            await spotifyFetch(`https://api.spotify.com/v1/me/player/volume?volume_percent=100&device_id=${spotifyDeviceId}`, {
                                method: 'PUT'
                            });
                        }
                    } catch (e) {
                        // ignore
                    }

                    console.log('✓ Spotify playback faded out and stopped');

                    completeFade(pauseSucceeded);
                }
            }, timeStep);
        } else if (currentPlayingAudio && !currentPlayingAudio.paused) {
            // Fade out local audio files if playing
            const fadeDuration = 800; // 800ms fade out
            const fadeSteps = 20;
            const initialVolume = currentPlayingAudio.volume;
            const volumeStep = initialVolume / fadeSteps;
            const timeStep = fadeDuration / fadeSteps;
            
            let currentStep = 0;
            const fadeInterval = setInterval(() => {
                if (!currentPlayingAudio) {
                    clearInterval(fadeInterval);
                    completeFade();
                    return;
                }
                currentStep++;
                currentPlayingAudio.volume = Math.max(0, initialVolume - (volumeStep * currentStep));
                
                if (currentStep >= fadeSteps || currentPlayingAudio.volume <= 0) {
                    clearInterval(fadeInterval);
                    if (currentPlayingAudio) {
                        currentPlayingAudio.pause();
                        currentPlayingAudio.currentTime = 0;
                        currentPlayingAudio.volume = 0.5; // Reset volume
                    }
                    currentPlayingAudio = null;
                    completeFade(true);
                }
            }, timeStep);
        } else {
            // No track playing, resolve immediately
            completeFade(true);
        }
    });
}

/** Stop playback immediately (no fade). Part of MUSIC PLAYBACK CRITERIA #3. On 429, wait and retry so playback actually stops. */
async function stopTileMusic() {
    // Cancel any tile play attempt still retrying, so it can't restart music after this stop (criterion #3).
    tilePlaybackGeneration++;
    await ensureValidSpotifyAccessToken();
    // Clear any existing fade out interval immediately
    if (fadeOutInterval) {
        clearInterval(fadeOutInterval);
        fadeOutInterval = null;
    }
    
    // IMMEDIATELY cut off Spotify playback completely (use Web API first, SDK fallback)
    if (spotifyAccessToken && spotifyDeviceId && spotifyReady) {
        const trackName = currentPlayingTrack ? currentPlayingTrack.name : 'Unknown track';
        console.log('IMMEDIATELY cutting off Spotify playback:', trackName);

        const pauseUrl = `https://api.spotify.com/v1/me/player/pause?device_id=${spotifyDeviceId}`;
        try {
            let pauseRes = await spotifyFetch(pauseUrl, { method: 'PUT' });
            if (pauseRes.status === 429) {
                const waitMs = getSpotifyRetryAfterMs(pauseRes);
                console.warn('[Music] 429 on stopTileMusic pause, waiting', waitMs, 'ms then retrying');
                await new Promise(r => setTimeout(r, waitMs));
                pauseRes = await spotifyFetch(pauseUrl, { method: 'PUT' });
            }
        } catch (e) {
            // ignore
        }

        currentPlayingTrack = null;

        const volUrl = `https://api.spotify.com/v1/me/player/volume?volume_percent=100&device_id=${spotifyDeviceId}`;
        try {
            let volRes = await spotifyFetch(volUrl, { method: 'PUT' });
            if (volRes.status === 429) {
                await new Promise(r => setTimeout(r, getSpotifyRetryAfterMs(volRes)));
                await spotifyFetch(volUrl, { method: 'PUT' });
            }
        } catch (e) {
            // ignore
        }
    }
    
    // IMMEDIATELY cut off local audio files completely
    if (currentPlayingAudio) {
        try {
            // Pause to stop playback
            if (!currentPlayingAudio.paused) {
                currentPlayingAudio.pause();
            }
            // Reset to beginning - cuts off at start
            currentPlayingAudio.currentTime = 0;
            // Load() completely stops and resets the audio element
            currentPlayingAudio.load();
            // Reset volume
            currentPlayingAudio.volume = 0.5;
            // Clear reference - audio is completely stopped
            currentPlayingAudio = null;
            console.log('✓ Local audio CUT OFF IMMEDIATELY');
        } catch (e) {
            console.error('Error cutting off local audio:', e);
            // Still clear the reference even if stop fails
            currentPlayingAudio = null;
        }
    }
}

// Play right-answer sound when a team gets a point (team button clicked)
function playRightAnswer() {
    initAudioContext();
    try {
        if (rightAnswerAudio) {
            rightAnswerAudio.currentTime = 0;
            rightAnswerAudio.play().catch(() => {});
        }
    } catch (error) {}
}

// Play wrong answer sound when incorrect answer is selected
function playWrongAnswer() {
    initAudioContext();
    try {
        if (wrongAnswerAudio) {
            wrongAnswerAudio.currentTime = 0;
            wrongAnswerAudio.play().catch(() => playGeneratedWrongAnswer());
            return;
        }
        playGeneratedWrongAnswer();
    } catch (error) {
        playGeneratedWrongAnswer();
    }
}

// Audio context for generated sounds
let audioContext = null;

// Initialize audio context (required for browser autoplay policies).
// Must be called after a user gesture (e.g. click); do not call on page load.
// Skipped in TV/HDMI safe mode to avoid HDMI renegotiation that can turn off some TVs.
function initAudioContext() {
    if (isTvSafeMode()) return;
    try {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioContext.state === 'suspended') {
            audioContext.resume().catch(() => {});
        }
    } catch (error) {
        // Silently ignore; audio features will be disabled
    }
}
// Resume audio context and return a promise (use before playing generated sounds)
function resumeAudioContext() {
    if (isTvSafeMode()) return Promise.resolve();
    try {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        return audioContext.state === 'suspended' ? audioContext.resume() : Promise.resolve();
    } catch (error) {
        return Promise.resolve();
    }
}

// Waveform visualization functions
// Note: Requires running through a web server (not file://) to avoid CORS restrictions
// Disabled in TV/HDMI safe mode (continuous canvas + Web Audio can cause some TVs to turn off).
function startWaveform(audioElement) {
    if (isTvSafeMode()) return;
    try {
        initAudioContext();
        
        if (!audioContext) {
            console.warn('Audio context not available for waveform');
            return;
        }
        
        // Ensure audio context is running
        if (audioContext.state === 'suspended') {
            audioContext.resume().catch(err => {
                console.warn('Could not resume audio context:', err);
            });
        }
        
        const waveformContainer = document.getElementById('waveformContainer');
        const canvas = document.getElementById('waveformCanvas');
        
        if (!waveformContainer || !canvas) {
            console.warn('Waveform elements not found');
            return;
        }
        
        // Stop any existing waveform animation first
        if (waveformAnimationId) {
            cancelAnimationFrame(waveformAnimationId);
            waveformAnimationId = null;
        }
        
        // Show waveform container
        waveformContainer.style.display = 'block';
        
        // Set canvas size
        canvas.width = 600;
        canvas.height = 100;
        
        const ctx = canvas.getContext('2d');
        
        // Create analyser node
        analyserNode = audioContext.createAnalyser();
        analyserNode.fftSize = 256;
        analyserNode.smoothingTimeConstant = 0.8;
        
        try {
            // Check if audio element already has a source node (you can only create one per element)
            if (audioElement._audioSourceNode && audioElement._audioSourceNode.context === audioContext) {
                console.log('Reusing existing audio source node');
                audioSourceNode = audioElement._audioSourceNode;
                
                // Disconnect all existing connections to reconnect properly
                try {
                    audioSourceNode.disconnect();
                } catch (e) {
                    // Ignore if not connected
                }
            } else {
                // Create media element source
                // IMPORTANT: Once you create a MediaElementSource, the audio element is disconnected from default output
                // So we MUST connect it to destination through our graph for audio to play
                audioSourceNode = audioContext.createMediaElementSource(audioElement);
                audioElement._audioSourceNode = audioSourceNode; // Store reference
                console.log('Created new audio source node');
            }
            
            // Create a gain node to split the signal
            // We'll connect this to both analyser (for visualization) and destination (for playback)
            const gainNode = audioContext.createGain();
            gainNode.gain.value = 1.0;
            
            // Connect source to gain node
            audioSourceNode.connect(gainNode);
            
            // Split the gain node output to both analyser (for visualization) and destination (for playback)
            gainNode.connect(analyserNode); // For waveform visualization
            gainNode.connect(audioContext.destination); // For audio playback - CRITICAL!
            
            // Store gain node reference for potential cleanup
            audioElement._outputGainNode = gainNode;
            
            console.log('Waveform audio routing set up successfully - audio should play');
        } catch (error) {
            console.error('Could not create audio source for waveform:', error);
            // If connection fails, hide waveform but don't break audio
            // The audio element will still try to play through default connection
            analyserNode = null;
            audioSourceNode = null;
            waveformContainer.style.display = 'none';
            return; // Exit early - audio will try to play through default connection
        }
        
        // Start animation only if analyser is set up
        if (analyserNode) {
            function drawWaveform() {
                if (!analyserNode) {
                    stopWaveform();
                    return;
                }
                
                const bufferLength = analyserNode.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLength);
                analyserNode.getByteFrequencyData(dataArray);
                
                // Clear canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Draw waveform bars
                const barWidth = canvas.width / bufferLength * 2.5;
                let x = 0;
                
                ctx.fillStyle = '#ffffff';
                
                for (let i = 0; i < bufferLength; i++) {
                    const barHeight = (dataArray[i] / 255) * canvas.height;
                    
                    ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
                    x += barWidth + 1;
                }
                
                waveformAnimationId = requestAnimationFrame(drawWaveform);
            }
            
            drawWaveform();
        }
    } catch (error) {
        console.error('Error starting waveform:', error);
        // Hide waveform on error but don't break audio
        const waveformContainer = document.getElementById('waveformContainer');
        if (waveformContainer) {
            waveformContainer.style.display = 'none';
        }
    }
}

function stopWaveform() {
    if (waveformAnimationId) {
        cancelAnimationFrame(waveformAnimationId);
        waveformAnimationId = null;
    }
    
    // Disconnect analyser but keep audio playing through destination
    if (analyserNode && audioSourceNode) {
        try {
            // Disconnect analyser from the chain
            // The audio should still play through the outputGainNode -> destination connection
            analyserNode = null;
        } catch (e) {
            console.warn('Error disconnecting analyser:', e);
        }
    }
    
    const waveformContainer = document.getElementById('waveformContainer');
    if (waveformContainer) {
        waveformContainer.style.display = 'none';
    }
    
    // Note: We don't disconnect audioSourceNode or outputGainNode here
    // because the audio needs to keep playing. The source node stays connected
    // to the destination through outputGainNode even after waveform stops.
}


// Fallback: Generate a wrong answer sound if audio file is not available
function playGeneratedWrongAnswer() {
    if (isTvSafeMode()) return;
    initAudioContext();
    resumeAudioContext().then(() => {
        try {
            if (!audioContext) return;
            const frequency1 = 400;
            const frequency2 = 300;
            const duration = 0.5;
            const t = audioContext.currentTime;
            const gainNode = audioContext.createGain();
            gainNode.gain.setValueAtTime(0.4, t);
            gainNode.gain.exponentialRampToValueAtTime(0.01, t + duration);
            gainNode.connect(audioContext.destination);
            const oscillator = audioContext.createOscillator();
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(frequency1, t);
            oscillator.frequency.exponentialRampToValueAtTime(frequency2, t + duration);
            oscillator.connect(gainNode);
            oscillator.start(t);
            oscillator.stop(t + duration);
        } catch (error) {}
    }).catch(() => {});
}

// Fallback: Generate Avicii Levels-like sound if file is not available
function playGeneratedLevels() {
    if (isTvSafeMode()) return;
    try {
        initAudioContext();

        if (!audioContext) {
            console.error('Audio context not available');
            return;
        }
        
        // Create a pleasant chime sound using multiple frequencies
        const frequencies = [523.25, 659.25, 783.99]; // C, E, G notes (C major chord)
        const duration = 0.5;
        const gainNode = audioContext.createGain();
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        gainNode.connect(audioContext.destination);
        
        // Play each frequency with a slight delay for a richer sound
        frequencies.forEach((freq, index) => {
            const oscillator = audioContext.createOscillator();
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
            oscillator.connect(gainNode);
            oscillator.start(audioContext.currentTime + (index * 0.05));
            oscillator.stop(audioContext.currentTime + duration + (index * 0.05));
        });
    } catch (error) {
        console.error('Error generating Levels sound:', error);
    }
}

// Generate PKCE code verifier and challenge
function generatePKCE() {
    if (!window.crypto || !window.crypto.getRandomValues || !window.crypto.subtle) {
        return Promise.reject(new Error('Web Crypto API unavailable (use HTTPS or localhost)'));
    }
    // Generate code verifier (random string)
    const array = new Uint32Array(56 / 2);
    window.crypto.getRandomValues(array);
    const codeVerifier = Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join('');
    
    // Generate code challenge (SHA256 hash, base64url encoded)
    return window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier))
        .then(hash => {
            const codeChallenge = btoa(String.fromCharCode(...new Uint8Array(hash)))
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=+$/, '');
            
            // Store verifier for later
            sessionStorage.setItem('pkce_verifier', codeVerifier);
            
            return {
                codeVerifier: codeVerifier,
                codeChallenge: codeChallenge
            };
        });
}

// Spotify Authentication and API Functions

function applySpotifyTokenResponse(data) {
    if (!data || !data.access_token) return;
    spotifyAccessToken = data.access_token;
    localStorage.setItem(SPOTIFY_TOKEN_STORAGE.access, data.access_token);

    if (data.refresh_token) {
        spotifyRefreshToken = data.refresh_token;
        localStorage.setItem(SPOTIFY_TOKEN_STORAGE.refresh, data.refresh_token);
    }

    const expiresIn = typeof data.expires_in === 'number' ? data.expires_in : 3600;
    spotifyTokenExpiresAt = Date.now() + expiresIn * 1000;
    localStorage.setItem(SPOTIFY_TOKEN_STORAGE.expiresAt, String(spotifyTokenExpiresAt));

    startSpotifyTokenRefreshWatchers();
}

function spotifyAccessTokenIsExpired() {
    if (!spotifyTokenExpiresAt) return false;
    return Date.now() >= spotifyTokenExpiresAt;
}

function stopSpotifyTokenRefreshWatchers() {
    if (spotifyTokenRefreshTimer) {
        clearTimeout(spotifyTokenRefreshTimer);
        spotifyTokenRefreshTimer = null;
    }
    if (spotifyTokenRefreshInterval) {
        clearInterval(spotifyTokenRefreshInterval);
        spotifyTokenRefreshInterval = null;
    }
}

function startSpotifyTokenRefreshWatchers() {
    scheduleSpotifyTokenRefresh();
    if (!spotifyRefreshToken) return;
    if (spotifyTokenRefreshInterval) return;
    spotifyTokenRefreshInterval = setInterval(() => {
        ensureValidSpotifyAccessToken().catch(() => {});
    }, TOKEN_REFRESH_INTERVAL_MS);
}

function loadSpotifyTokensFromStorage() {
    try {
        spotifyAccessToken = localStorage.getItem(SPOTIFY_TOKEN_STORAGE.access);
        spotifyRefreshToken = localStorage.getItem(SPOTIFY_TOKEN_STORAGE.refresh);
        const expiresAt = localStorage.getItem(SPOTIFY_TOKEN_STORAGE.expiresAt);
        spotifyTokenExpiresAt = expiresAt ? parseInt(expiresAt, 10) : null;

        // No refresh token — keep access token until it expires, then require re-login.
        if (spotifyAccessToken && !spotifyRefreshToken && spotifyTokenExpiresAt && spotifyAccessTokenIsExpired()) {
            clearSpotifyTokens();
            return;
        }

        if (spotifyRefreshToken) {
            startSpotifyTokenRefreshWatchers();
            if (spotifyTokenNeedsRefresh()) {
                ensureValidSpotifyAccessToken().catch(() => {});
            }
        }
    } catch (e) {
        // localStorage may be unavailable
    }
}

function markSpotifySessionExpired() {
    stopSpotifyTokenRefreshWatchers();
    spotifyAccessToken = null;
    spotifyRefreshToken = null;
    spotifyTokenExpiresAt = null;
    try {
        localStorage.removeItem(SPOTIFY_TOKEN_STORAGE.access);
        localStorage.removeItem(SPOTIFY_TOKEN_STORAGE.refresh);
        localStorage.removeItem(SPOTIFY_TOKEN_STORAGE.expiresAt);
    } catch (e) {
        // ignore
    }
    spotifyDevicePrimed = false;
    landingPlaybackStartPending = false;
    clearLandingPlaybackGestureFallback();
    if (spotifyPlayer) {
        try { spotifyPlayer.disconnect(); } catch (e) { /* ignore */ }
    }
    spotifyPlayer = null;
    spotifyDeviceId = null;
    spotifyReady = false;
    updateSpotifyUI();
}

function clearSpotifyTokens() {
    stopSpotifyTokenRefreshWatchers();
    spotifyAccessToken = null;
    spotifyRefreshToken = null;
    spotifyTokenExpiresAt = null;
    try {
        localStorage.removeItem(SPOTIFY_TOKEN_STORAGE.access);
        localStorage.removeItem(SPOTIFY_TOKEN_STORAGE.refresh);
        localStorage.removeItem(SPOTIFY_TOKEN_STORAGE.expiresAt);
    } catch (e) {
        // ignore
    }
}

function spotifyTokenNeedsRefresh() {
    if (!spotifyAccessToken || !spotifyRefreshToken) return false;
    if (!spotifyTokenExpiresAt) return true;
    return Date.now() >= spotifyTokenExpiresAt - TOKEN_REFRESH_BUFFER_MS;
}

function scheduleSpotifyTokenRefresh() {
    if (spotifyTokenRefreshTimer) {
        clearTimeout(spotifyTokenRefreshTimer);
        spotifyTokenRefreshTimer = null;
    }
    if (!spotifyRefreshToken || !spotifyTokenExpiresAt) return;

    const delay = Math.max(1000, spotifyTokenExpiresAt - TOKEN_REFRESH_BUFFER_MS - Date.now());
    spotifyTokenRefreshTimer = setTimeout(() => {
        spotifyTokenRefreshTimer = null;
        ensureValidSpotifyAccessToken().catch(() => {});
        scheduleSpotifyTokenRefresh();
    }, delay);
}

async function refreshSpotifyAccessToken() {
    if (!spotifyRefreshToken) {
        throw new Error('No Spotify refresh token');
    }

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            client_id: SPOTIFY_CLIENT_ID,
            grant_type: 'refresh_token',
            refresh_token: spotifyRefreshToken
        })
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.error_description || error.error || 'Token refresh failed');
    }

    const data = await response.json();
    applySpotifyTokenResponse({
        ...data,
        refresh_token: data.refresh_token || spotifyRefreshToken
    });
    return spotifyAccessToken;
}

async function refreshSpotifyAccessTokenWithRetry() {
    let lastError = null;
    for (let attempt = 0; attempt < TOKEN_REFRESH_MAX_RETRIES; attempt++) {
        try {
            return await refreshSpotifyAccessToken();
        } catch (err) {
            lastError = err;
            const message = err && err.message ? String(err.message) : '';
            if (message.includes('invalid_grant') || message.includes('invalid refresh token')) {
                break;
            }
            if (attempt < TOKEN_REFRESH_MAX_RETRIES - 1) {
                await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
            }
        }
    }
    throw lastError || new Error('Token refresh failed');
}

/** Returns a valid access token, refreshing silently when near expiry. */
async function ensureValidSpotifyAccessToken() {
    if (!spotifyAccessToken) return null;

    if (!spotifyRefreshToken) {
        if (spotifyAccessTokenIsExpired()) {
            markSpotifySessionExpired();
            return null;
        }
        return spotifyAccessToken;
    }

    if (!spotifyTokenNeedsRefresh()) return spotifyAccessToken;

    if (!spotifyTokenRefreshPromise) {
        spotifyTokenRefreshPromise = refreshSpotifyAccessTokenWithRetry()
            .catch((err) => {
                console.error('Spotify token refresh failed after retries:', err);
                markSpotifySessionExpired();
                return null;
            })
            .finally(() => {
                spotifyTokenRefreshPromise = null;
            });
    }

    return spotifyTokenRefreshPromise;
}

/** Authenticated Spotify Web API fetch with proactive refresh and one 401 retry. */
async function spotifyFetch(url, options = {}) {
    await ensureValidSpotifyAccessToken();
    if (!spotifyAccessToken) {
        return new Response(JSON.stringify({ error: { message: 'Not authenticated with Spotify' } }), {
            status: 401,
            statusText: 'Unauthorized',
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const makeRequest = () => {
        const headers = { ...(options.headers || {}) };
        headers.Authorization = `Bearer ${spotifyAccessToken}`;
        return fetch(url, { ...options, headers });
    };

    let response = await makeRequest();
    if (response.status === 401 && spotifyRefreshToken) {
        try {
            await refreshSpotifyAccessTokenWithRetry();
            if (spotifyAccessToken) {
                response = await makeRequest();
            }
        } catch (err) {
            console.error('Spotify token refresh after 401 failed:', err);
            markSpotifySessionExpired();
        }
    }
    return response;
}

async function startSpotifyLogin() {
    setConnectPageStatus('Opening Spotify…');
    console.log('[Spotify] Connect clicked — starting login');
    try {
        if (!spotifyReady) {
            clearSpotifyTokens();
        }
        const authUrl = await getSpotifyAuthUrl();
        console.log('[Spotify] Redirecting to authorize');
        window.location.assign(authUrl);
    } catch (error) {
        console.error('[Spotify] Login failed:', error);
        const msg = 'Could not start Spotify login. Use HTTPS or http://localhost (not a local file).';
        setConnectPageStatus(msg, true);
        alert(msg);
    }
}

function setConnectPageStatus(message, isError) {
    const el = document.getElementById('connectPageStatus');
    if (!el) return;
    el.textContent = message || '';
    el.style.color = isError ? '#ff8888' : 'rgba(255,255,255,0.75)';
}

async function getSpotifyAuthUrl() {
    const pkce = await generatePKCE();
    const params = new URLSearchParams({
        client_id: SPOTIFY_CLIENT_ID,
        response_type: 'code',
        redirect_uri: SPOTIFY_REDIRECT_URI,
        scope: SPOTIFY_SCOPES,
        code_challenge_method: 'S256',
        code_challenge: pkce.codeChallenge,
        show_dialog: true
    });
    const authUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;
    console.log('Spotify Auth URL:', authUrl);
    console.log('Redirect URI being sent:', SPOTIFY_REDIRECT_URI);
    return authUrl;
}

async function handleSpotifyCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const authError = urlParams.get('error');
    if (authError) {
        const description = urlParams.get('error_description') || authError;
        console.error('[Spotify] Authorization error:', description);
        clearSpotifyTokens();
        window.history.replaceState({}, document.title, window.location.pathname + (window.location.hash || '#connect'));
        const msg = authError === 'invalid_scope'
            ? 'Spotify rejected the login scopes. Hard-refresh (Ctrl+Shift+R) and try again.'
            : ('Spotify login failed: ' + description);
        setConnectPageStatus(msg, true);
        alert(msg);
        return;
    }

    // Try Authorization Code flow first (from query params)
    const code = urlParams.get('code');
    
    if (code) {
        // Authorization Code flow
        const codeVerifier = sessionStorage.getItem('pkce_verifier');
        if (!codeVerifier) {
            console.error('No code verifier found');
            return;
        }
        
        try {
            const response = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    client_id: SPOTIFY_CLIENT_ID,
                    grant_type: 'authorization_code',
                    code: code,
                    redirect_uri: SPOTIFY_REDIRECT_URI,
                    code_verifier: codeVerifier
                })
            });
            
            if (response.ok) {
                const data = await response.json();
                applySpotifyTokenResponse(data);
                sessionStorage.removeItem('pkce_verifier');
                window.history.replaceState({}, document.title, window.location.pathname);
                playLandingPlaylistOnReady = true;
                initializeSpotify();
                // Immediately go to KARAOKE PARTY! landing page after connecting
                if (window.navigateToPage) window.navigateToPage('landing');
                return;
            } else {
                const error = await response.json();
                console.error('Token exchange failed:', error);
            }
        } catch (error) {
            console.error('Error exchanging code for token:', error);
        }
    }
    
    // Fallback to Implicit Grant flow (from hash)
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');
    
    if (accessToken) {
        const expiresIn = params.get('expires_in');
        applySpotifyTokenResponse({
            access_token: accessToken,
            expires_in: expiresIn ? parseInt(expiresIn, 10) : 3600
        });
        window.location.hash = ''; // Clear hash from URL
        playLandingPlaylistOnReady = true;
        initializeSpotify();
        // Immediately go to KARAOKE PARTY! landing page after connecting
        if (window.navigateToPage) window.navigateToPage('landing');
    } else if (spotifyAccessToken) {
        initializeSpotify();
    }
}

async function initializeSpotify() {
    if (!spotifyAccessToken) {
        console.error('No Spotify access token available');
        return;
    }

    if (spotifyPlayer) {
        try {
            await spotifyPlayer.disconnect();
        } catch (e) { /* ignore */ }
        spotifyPlayer = null;
        spotifyDeviceId = null;
        spotifyReady = false;
        spotifyDevicePrimed = false;
    }
    
    // Initialize Web Playback SDK
    window.onSpotifyWebPlaybackSDKReady = () => {
        // Guard: if the SDK calls this twice (e.g. it was loaded twice), don't create a second player/device.
        if (spotifyPlayer) {
            console.warn('[Spotify] SDK ready callback fired again; keeping the existing player');
            return;
        }
        spotifyPlayer = new Spotify.Player({
            name: 'Karaoke Jeopardy Player',
            getOAuthToken: cb => {
                ensureValidSpotifyAccessToken()
                    .then((token) => cb(token || ''))
                    .catch(() => cb(''));
            },
            volume: 0.5
        });
        
        // Error handling
        spotifyPlayer.addListener('initialization_error', ({ message }) => {
            console.error('Spotify initialization error:', message);
        });
        
        spotifyPlayer.addListener('authentication_error', ({ message }) => {
            console.error('Spotify authentication error:', message);
            if (spotifyRefreshToken) {
                refreshSpotifyAccessTokenWithRetry()
                    .then(() => updateSpotifyUI())
                    .catch(() => markSpotifySessionExpired());
                return;
            }
            markSpotifySessionExpired();
        });
        
        spotifyPlayer.addListener('account_error', ({ message }) => {
            console.error('Spotify account error:', message);
        });

        // Browser blocked the sound until the user interacts with the page. Typical right after the Spotify
        // login redirect, because the freshly loaded page hasn't been clicked yet. Spotify's servers may still
        // report the track as "playing", so without this the landing song can fail silently.
        spotifyPlayer.addListener('autoplay_failed', () => {
            console.warn('[Spotify] autoplay_failed: the browser blocked sound until the page is clicked or a key is pressed');
            const gameContainer = document.getElementById('gameContainer');
            if (gameContainer && isElementVisible(gameContainer)) return; // board songs always start from a click
            landingAutoplayBlocked = true;
            landingPlaybackStartPending = true;
            armLandingPlaybackGestureFallback();
            showTapToStartMusicHint();
        });
        
        // Ready event
        spotifyPlayer.addListener('ready', ({ device_id }) => {
            spotifyDeviceId = device_id;
            spotifyReady = true;
            spotifyDevicePrimed = false;
            // Start landing playlist after connect, or if user is already on the landing page (e.g. skipped ahead of SDK ready).
            const shouldStartLandingMusic = playLandingPlaylistOnReady || isLandingPageCurrentlyVisible();
            console.log(`[Spotify] Player ready (device ${device_id}). Landing song: ${shouldStartLandingMusic ? 'starting' : 'not started (not on landing page)'}`);
            if (playLandingPlaylistOnReady) playLandingPlaylistOnReady = false;
            if (shouldStartLandingMusic) {
                startLandingPlaybackAfterConnect(); // retries after device settles and on first user gesture if needed
            }
            updateSpotifyUI();
            fetchUserPlaylists();
            // Show Continue button when ready
            const continueBtn = document.getElementById('continueBtn');
            if (continueBtn) {
                continueBtn.style.display = 'block';
            }
            // Show success notification
            showSpotifySuccessNotification();
        });
        
        // Connect to the player
        spotifyPlayer.connect();
    };
    
    // Load Spotify Web Playback SDK if not already loaded.
    // index.html already includes the SDK <script>; if it's still loading, it will call
    // onSpotifyWebPlaybackSDKReady (the handler above) by itself, so don't add a second copy.
    const sdkScriptAlreadyOnPage = !!document.querySelector('script[src*="sdk.scdn.co/spotify-player.js"]');
    if (!window.Spotify && sdkScriptAlreadyOnPage) {
        console.log('[Spotify] SDK still loading; player will be created when it is ready');
    } else if (!window.Spotify) {
        const script = document.createElement('script');
        script.src = 'https://sdk.scdn.co/spotify-player.js';
        script.onload = () => {
            // SDK will call onSpotifyWebPlaybackSDKReady when ready
        };
        document.head.appendChild(script);
    } else {
        // SDK already loaded, trigger ready callback
        if (window.onSpotifyWebPlaybackSDKReady) {
            window.onSpotifyWebPlaybackSDKReady();
        }
    }
}

async function fetchUserPlaylists() {
    await ensureValidSpotifyAccessToken();
    if (!spotifyAccessToken) return;
    
    try {
        let allPlaylists = [];
        let url = 'https://api.spotify.com/v1/me/playlists?limit=50';
        
        while (url) {
            const response = await spotifyFetch(url);
            
            if (!response.ok) {
                throw new Error('Failed to fetch playlists');
            }
            
            const data = await response.json();
            allPlaylists = allPlaylists.concat(data.items);
            url = data.next; // Get next page if available
        }
        
        spotifyPlaylists = allPlaylists;
        updatePlaylistSelect();
        // console.log(`Fetched ${allPlaylists.length} playlists`); // Disabled - too verbose
        // Load category playlists after fetching all playlists
        // But skip if we're using selected playlists from category selection
        if (selectedCategoryPlaylists.length !== 6) {
            // Skip loadCategoryPlaylists - we use embedded playlists from category selection instead
            // loadCategoryPlaylists();
        } else {
            // console.log('Skipping loadCategoryPlaylists - using selected playlists from category selection'); // Disabled
        }
    } catch (error) {
        console.error('Error fetching playlists:', error);
    }
}

// Load playlists for specific categories
// DISABLED: We now use embedded playlists from category selection
async function loadCategoryPlaylists() {
    // This function is disabled - we use embedded playlists instead
    return;
    
    // CRITICAL: Don't load if we're using selected playlists from category selection page
    if (selectedCategoryPlaylists.length === 6) {
        return;
    }
    
    // CRITICAL: Don't load if we're currently loading selected playlists
    if (isLoadingSelectedPlaylists) {
        return;
    }
    
    // CRITICAL: Don't load if categoryPlaylists already has 6 items (selected playlists loaded)
    if (categoryPlaylists.length === 6 && selectedCategoryNames.length === 6) {
        console.log('Skipping loadCategoryPlaylists - selected playlists already loaded');
        return;
    }
    
    if (!spotifyAccessToken || !spotifyPlaylists.length) {
        console.log('Waiting for playlists to load...');
        return;
    }
    
    // Only initialize category playlists array if we're not using selected playlists
    // and if it's empty or has the wrong number of items
    if (categoryPlaylists.length === 0 || (selectedCategoryPlaylists.length !== 6 && categoryPlaylists.length !== categoryPlaylistNames.length)) {
        categoryPlaylists = [];
    }
    
    // console.log('Loading category playlists...'); // Disabled - using embedded playlists
    
    // Load tracks for each category playlist
    for (let i = 0; i < categoryPlaylistNames.length; i++) {
        // CRITICAL: Check again inside loop - conditions may have changed
        if (selectedCategoryPlaylists.length === 6 || isLoadingSelectedPlaylists || (categoryPlaylists.length === 6 && selectedCategoryNames.length === 6)) {
            console.log(`Breaking loadCategoryPlaylists loop at index ${i} - using selected playlists`);
            break;
        }
        
        const playlistName = categoryPlaylistNames[i];
        
        // Find the playlist by name
        const playlist = spotifyPlaylists.find(p => p.name === playlistName);
        
        if (playlist) {
            try {
                console.log(`Loading tracks for ${playlistName}...`);
                const tracks = await loadPlaylistTracksById(playlist.id);
                // Only assign if we're still not using selected playlists
                if (selectedCategoryPlaylists.length !== 6 && !isLoadingSelectedPlaylists && !(categoryPlaylists.length === 6 && selectedCategoryNames.length === 6)) {
                    categoryPlaylists[i] = tracks;
                    console.log(`Loaded ${tracks.length} tracks for ${playlistName}`);
                }
            } catch (error) {
                console.error(`Error loading tracks for ${playlistName}:`, error);
                // Only assign empty array if we're still not using selected playlists
                if (selectedCategoryPlaylists.length !== 6 && !isLoadingSelectedPlaylists && !(categoryPlaylists.length === 6 && selectedCategoryNames.length === 6)) {
                    categoryPlaylists[i] = [];
                }
            }
        } else {
            // console.warn(`Playlist "${playlistName}" not found`); // Disabled - using embedded playlists
            // Only assign empty array if we're still not using selected playlists
            if (selectedCategoryPlaylists.length !== 6 && !isLoadingSelectedPlaylists && !(categoryPlaylists.length === 6 && selectedCategoryNames.length === 6)) {
                categoryPlaylists[i] = [];
            }
        }
    }
    
    // console.log('Category playlists loaded:', categoryPlaylists.map((p, i) => ({...}))); // Disabled
}

// Load tracks from a playlist by ID
async function loadPlaylistTracksById(playlistId) {
    await ensureValidSpotifyAccessToken();
    if (!spotifyAccessToken) return [];
    
    try {
        // First, check if playlist is accessible (public or owned by user)
        // Don't use market parameter - let Spotify use user's market automatically
        const playlistCheck = await spotifyFetch(`https://api.spotify.com/v1/playlists/${playlistId}`);
        
        if (!playlistCheck.ok) {
            if (playlistCheck.status === 404) {
                console.error(`❌ Playlist ${playlistId} not found. The playlist may be private, deleted, or not accessible.`);
            } else if (playlistCheck.status === 403) {
                console.error(`❌ Playlist ${playlistId} returned 403 Forbidden.`);
                console.error(`   This means the playlist is PRIVATE or has access restrictions.`);
                console.error(`   Even if it appears "public" in Spotify, it may not be accessible via API.`);
                console.error(`   SOLUTION: In Spotify, go to the playlist → Click "..." → Make sure "Make Public" is enabled.`);
            } else {
                console.error(`❌ Failed to access playlist ${playlistId}: ${playlistCheck.status} ${playlistCheck.statusText}`);
            }
            return [];
        }
        
        const playlistInfo = await playlistCheck.json();
        
        // Log playlist details for debugging
        console.log(`Playlist ${playlistId} details:`, {
            name: playlistInfo.name,
            public: playlistInfo.public,
            collaborative: playlistInfo.collaborative,
            owner: playlistInfo.owner?.display_name || playlistInfo.owner?.id,
            tracks: playlistInfo.tracks?.total
        });
        
        // Check if playlist is actually public
        if (playlistInfo.public !== true) {
            console.error(`❌ Playlist ${playlistId} ("${playlistInfo.name}") is NOT PUBLIC.`);
            console.error(`   Current status: public=${playlistInfo.public}, collaborative=${playlistInfo.collaborative}`);
            console.error(`   Owner: ${playlistInfo.owner?.display_name || playlistInfo.owner?.id}`);
            console.error(`   SOLUTION: In Spotify, go to playlist → "..." → "Make Public"`);
            console.error(`   NOTE: Even if you can see it, other users need it to be PUBLIC (not just collaborative)`);
            return [];
        }
        
        let allTracks = [];
        // Request artist ids so we can fetch popularity and assign value buckets ($100-$500)
        const tracksFields = 'items(track(uri,name,artists(id,name),album(images)))';
        let url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=100&fields=${encodeURIComponent(tracksFields)}`;
        
        while (url && allTracks.length < 100) {
            const response = await spotifyFetch(url);
            
            if (!response.ok) {
                if (response.status === 403) {
                    console.error(`❌ Access denied to playlist ${playlistId} tracks.`);
                    console.error(`   The playlist must be PUBLIC for all users to access tracks via API.`);
                } else if (response.status === 404) {
                    console.error(`❌ Playlist ${playlistId} tracks not found.`);
                } else {
                    console.error(`❌ Failed to fetch playlist tracks: ${response.status} ${response.statusText}`);
                }
                throw new Error(`Failed to fetch playlist tracks: ${response.status}`);
            }
            
            const data = await response.json();
            const tracks = data.items
                .filter(item => item.track && item.track.uri)
                .map(item => {
                    const t = item.track;
                    const firstArtistId = (t.artists && t.artists[0]) ? t.artists[0].id : null;
                    return {
                        uri: t.uri,
                        name: t.name,
                        artist: (t.artists || []).map(a => a.name).join(', '),
                        artistId: firstArtistId,
                        albumCover: getLargestSpotifyImageUrl(t.album && t.album.images)
                    };
                });
            
            allTracks = allTracks.concat(tracks);
            url = data.next;
        }
        
        // Fetch artist popularities (batch of 50 per Spotify limit)
        const artistIds = [...new Set(allTracks.map(t => t.artistId).filter(Boolean))];
        const BATCH = 50;
        const popularityByArtistId = {};
        for (let i = 0; i < artistIds.length; i += BATCH) {
            const chunk = artistIds.slice(i, i + BATCH);
            const res = await spotifyFetch(`https://api.spotify.com/v1/artists?ids=${chunk.join(',')}`);
            if (!res.ok) continue;
            const artistData = await res.json();
            (artistData.artists || []).forEach((a) => {
                if (a && a.id && typeof a.popularity === 'number') popularityByArtistId[a.id] = a.popularity;
            });
        }
        
        // Attach artist popularity to each track (use first artist's popularity)
        allTracks.forEach((t) => {
            t.artistPopularity = (t.artistId && popularityByArtistId[t.artistId]) != null
                ? popularityByArtistId[t.artistId]
                : null;
        });
        
        // Sort by artist popularity descending (highest first); nulls at end
        allTracks.sort((a, b) => (b.artistPopularity ?? -1) - (a.artistPopularity ?? -1));
        
        // Divide into 5 equal buckets by popularity: bucket 0 = $100 (highest), 4 = $500 (lowest)
        const N = allTracks.length;
        const bucketSizeHi = Math.ceil(N / 5);
        const bucketSizeLo = Math.floor(N / 5);
        const numHiBuckets = N % 5;
        let idx = 0;
        for (let bucket = 0; bucket < 5; bucket++) {
            const size = bucket < numHiBuckets ? bucketSizeHi : bucketSizeLo;
            for (let k = 0; k < size && idx < N; k++) {
                allTracks[idx].valueBucket = bucket;
                idx++;
            }
        }
        
        return allTracks;
    } catch (error) {
        console.error('Error loading playlist tracks:', error);
        return [];
    }
}

/** Shuffle array in place (Fisher-Yates). Returns the same array. */
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/** Play a random track from the landing playlist (KARAOKE PARTY! screen). Called when user lands on landing page after Spotify login. Must satisfy MUSIC PLAYBACK CRITERIA (see playTileMusic). */
/** Landing playlist tracks, fetched once per page load. Retries reuse it instead of re-fetching (3+ API calls each). */
let landingPlaylistTracksCache = null;

async function getLandingPlaylistTracks() {
    if (landingPlaylistTracksCache && landingPlaylistTracksCache.length > 0) return landingPlaylistTracksCache;
    const tracks = await loadPlaylistTracksById(LANDING_PLAYLIST_ID);
    if (tracks && tracks.length > 0) landingPlaylistTracksCache = tracks;
    return tracks;
}

async function playRandomTrackFromLandingPlaylist() {
    await ensureValidSpotifyAccessToken();
    if (!spotifyAccessToken || !spotifyDeviceId) {
        console.warn('[Landing] Not attempting: ' + (!spotifyAccessToken ? 'no access token' : 'player device not ready yet'));
        return false;
    }
    try {
        const tracks = await getLandingPlaylistTracks();
        if (!tracks || tracks.length === 0) {
            console.warn('[Landing] Landing playlist returned no tracks');
            return false;
        }
        // Shuffle so we get a different song each time (avoid same first track every connect)
        const shuffled = shuffleArray([...tracks]);
        const track = shuffled[0];
        const result = await playSpotifyTrackOnActiveDevice(track, { waitLongerForStart: true });
        if (result.ok) {
            console.log('Playing landing playlist track:', track.name, '-', track.artist,
                landingAutoplayBlocked ? '(but the browser is blocking the sound until a click/keypress)' : '');
            // Diagnostic: Spotify's servers can report "playing" while the browser has blocked the sound.
            // The SDK's own local state shows what this tab is actually doing.
            setTimeout(async () => {
                try {
                    const local = spotifyPlayer ? await spotifyPlayer.getCurrentState() : null;
                    console.log('[Landing] Local player state 1.5s after start: ' +
                        (local ? `paused=${local.paused}, position_ms=${local.position}` : 'none (this tab is not the active device)'));
                } catch (e) { /* ignore */ }
            }, 1500);
            return true;
        } else {
            console.warn(`[Landing] Could not play landing playlist track (${result.status}): ${result.errorText}`);
            return false;
        }
    } catch (error) {
        console.warn('[Landing] Could not play landing playlist track:', error);
        return false;
    }
}

/** Small on-screen prompt shown when the browser is holding the landing song until the user interacts. */
function showTapToStartMusicHint() {
    const gameContainer = document.getElementById('gameContainer');
    if (gameContainer && isElementVisible(gameContainer)) return; // board songs always start from a click
    if (document.getElementById('tapToStartMusicHint')) return;
    const hint = document.createElement('div');
    hint.id = 'tapToStartMusicHint';
    hint.setAttribute('role', 'status');
    hint.textContent = '🎵 Tap anywhere to start the music';
    hint.style.cssText = [
        'position:fixed', 'left:50%', 'bottom:28px', 'transform:translateX(-50%)', 'z-index:10000',
        'padding:12px 22px', 'border-radius:999px', 'background:rgba(0,0,0,0.75)', 'color:#fff',
        'font-family:"Bebas Neue",sans-serif', 'font-size:1.4rem', 'letter-spacing:0.06em',
        'box-shadow:0 0 18px rgba(255,50,150,0.6)', 'pointer-events:none'
    ].join(';');
    document.body.appendChild(hint);
}

function hideTapToStartMusicHint() {
    const hint = document.getElementById('tapToStartMusicHint');
    if (hint) hint.remove();
}

/**
 * Console helper: show artist popularity for every artist in a playlist (or in current game playlists).
 * Requires Spotify login.
 *
 * Usage from console:
 *   showArtistPopularityInPlaylist()                    — use currently selected 6 playlists (or embedded list)
 *   showArtistPopularityInPlaylist('7wdYvn9s0RJtNZzKiEcJxg')  — single playlist by ID
 */
async function showArtistPopularityInPlaylist(playlistIdOrIds) {
    await ensureValidSpotifyAccessToken();
    if (!spotifyAccessToken) {
        console.warn('Not logged in to Spotify. Connect first, then run showArtistPopularityInPlaylist(playlistId?).');
        return;
    }
    const playlistIds = playlistIdOrIds == null
        ? (selectedCategoryPlaylists && selectedCategoryPlaylists.length ? selectedCategoryPlaylists : displayedPlaylists && displayedPlaylists.length ? displayedPlaylists.map(p => p.id) : [])
        : (Array.isArray(playlistIdOrIds) ? playlistIdOrIds : [playlistIdOrIds]);
    if (!playlistIds.length) {
        console.warn('No playlists to show. Run with a playlist ID, or select 6 categories first.');
        return;
    }
    const BATCH = 50;
    const getArtistPopularities = async (artistIds) => {
        const map = {};
        for (let i = 0; i < artistIds.length; i += BATCH) {
            const chunk = artistIds.slice(i, i + BATCH);
            const res = await spotifyFetch(`https://api.spotify.com/v1/artists?ids=${chunk.join(',')}`);
            if (!res.ok) continue;
            const data = await res.json();
            (data.artists || []).forEach((a) => {
                if (a && a.id) map[a.id] = { name: a.name || '', popularity: typeof a.popularity === 'number' ? a.popularity : null };
            });
        }
        return map;
    };
    const tableRows = [];
    for (const pid of playlistIds) {
        let playlistName = pid;
        try {
            const metaRes = await spotifyFetch(`https://api.spotify.com/v1/playlists/${pid}`);
            if (metaRes.ok) {
                const meta = await metaRes.json();
                playlistName = meta.name || pid;
            }
        } catch (_) {}
        let url = `https://api.spotify.com/v1/playlists/${pid}/tracks?limit=100&fields=items(track(name,artists(id,name)))`;
        const tracks = [];
        const artistIds = new Set();
        while (url) {
            const res = await spotifyFetch(url);
            if (!res.ok) {
                console.error(`Playlist ${pid}: ${res.status}`);
                break;
            }
            const data = await res.json();
            const items = (data.items || []).filter((i) => i.track && i.track.uri);
            for (const item of items) {
                const t = item.track;
                const artists = (t.artists || []).map((a) => ({ id: a.id, name: a.name || '' }));
                artists.forEach((a) => { if (a.id) artistIds.add(a.id); });
                tracks.push({ name: t.name || '', artists });
            }
            url = data.next || null;
        }
        const popMap = await getArtistPopularities([...artistIds]);
        for (const t of tracks) {
            const first = t.artists[0];
            const pop = first && first.id && popMap[first.id] ? popMap[first.id].popularity : null;
            tableRows.push({
                Playlist: playlistName,
                Track: t.name,
                Artist: (t.artists || []).map((a) => a.name).join(', '),
                'Artist popularity': pop != null ? pop : ''
            });
        }
    }
    if (tableRows.length === 0) {
        console.warn('No tracks found in the selected playlists.');
        return;
    }
    console.log('Artist popularity in playlist(s) — table below:');
    console.table(tableRows, ['Playlist', 'Track', 'Artist', 'Artist popularity']);
}

/**
 * Fetch a playlist's tracks with popularity and return them sorted by popularity (desc).
 * Exposed on window so you can run from console when logged in, e.g.:
 *   showPlaylistByPopularity('7wdYvn9s0RJtNZzKiEcJxg')
 * Embedded playlist IDs: 00s=7wdYvn9s0RJtNZzKiEcJxg, Category2=13OyKBqoMBb8VVo7lkUJfk,
 *   Category3=4llfQFXs5fFVcwMNEXl6cc, Category4=13WDXtfk6a2qHg37syIpZn,
 *   Category6=1FF0ZcjKMp4pXZEbQdv4Oy, Category10=6GiV8bx7Qsdsyu43lkSmSw
 */
async function showPlaylistByPopularity(playlistId) {
    await ensureValidSpotifyAccessToken();
    if (!spotifyAccessToken) {
        console.warn('Not logged in to Spotify. Connect first, then run showPlaylistByPopularity(playlistId).');
        return [];
    }
    let all = [];
    let url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=100&fields=items(track(id,name,artists(name),album(name),popularity,uri))`;
    while (url) {
        const res = await spotifyFetch(url);
        if (!res.ok) {
            console.error('Failed to fetch playlist:', res.status);
            return [];
        }
        const data = await res.json();
        const items = (data.items || []).filter(i => i.track && i.track.uri);
        for (const item of items) {
            const t = item.track;
            all.push({
                name: t.name,
                artist: (t.artists || []).map(a => a.name).join(', '),
                album: (t.album && t.album.name) || '',
                popularity: typeof t.popularity === 'number' ? t.popularity : null
            });
        }
        url = data.next || null;
    }
    all.sort((a, b) => (b.popularity ?? -1) - (a.popularity ?? -1));
    const lines = ['Rank | Pop | Song - Artist', '-----|-----|' + '-'.repeat(60)];
    all.forEach((t, i) => {
        const pop = t.popularity != null ? String(t.popularity).padStart(3) : '  ?';
        lines.push(`${String(i + 1).padStart(4)} | ${pop} | ${t.name} - ${t.artist}`);
    });
    console.log(lines.join('\n'));
    return all;
}

// Show Spotify connection success notification
function showSpotifySuccessNotification() {
    const notification = document.getElementById('spotifySuccessNotification');
    if (!notification) return;
    
    // Show the notification
    notification.classList.add('show');
    
    // Hide after 2 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Initialize category selection page
async function initializeCategorySelection() {
    await ensureValidSpotifyAccessToken();
    selectedCategoryPlaylists = [];
    displayedPlaylists = [];
    selectedCategoryNames = [];
    
    const grid = document.getElementById('playlistButtonsGrid');
    const categorySpinner = document.getElementById('categorySelectionSpinner');
    if (!grid) return;
    
    // Show loading spinner and hide grid until buttons are ready
    if (categorySpinner) categorySpinner.classList.remove('hidden');
    grid.style.visibility = 'hidden';
    grid.style.minHeight = '0';
    grid.innerHTML = ''; // Clear existing buttons
    
    try {
    // Wait for playlists to be loaded if not ready
    if (!spotifyPlaylists || spotifyPlaylists.length === 0) {
        await fetchUserPlaylists();
    }
    
    // Permanent category playlists from "Karaoke Party!" folder
    // Embedded playlists configuration - these are the only playlists available as categories
    // Format: { id: 'playlist_id', name: 'Display Name', embedUrl: 'https://open.spotify.com/embed/playlist/...' }
    const embeddedPlaylists = [
        {
            id: '7wdYvn9s0RJtNZzKiEcJxg',
            name: '00s',
            embedUrl: 'https://open.spotify.com/embed/playlist/7wdYvn9s0RJtNZzKiEcJxg?utm_source=generator'
        },
        {
            id: '13OyKBqoMBb8VVo7lkUJfk',
            name: 'Category 2', // Will be replaced with actual playlist name from Spotify
            embedUrl: 'https://open.spotify.com/embed/playlist/13OyKBqoMBb8VVo7lkUJfk?utm_source=generator'
        },
        {
            id: '4llfQFXs5fFVcwMNEXl6cc',
            name: 'Category 3', // Will be replaced with actual playlist name from Spotify
            embedUrl: 'https://open.spotify.com/embed/playlist/4llfQFXs5fFVcwMNEXl6cc?utm_source=generator'
        },
        {
            id: '13WDXtfk6a2qHg37syIpZn',
            name: 'Category 4', // Will be replaced with actual playlist name from Spotify
            embedUrl: 'https://open.spotify.com/embed/playlist/13WDXtfk6a2qHg37syIpZn?utm_source=generator'
        },
        {
            id: '1FF0ZcjKMp4pXZEbQdv4Oy',
            name: 'Category 6', // Will be replaced with actual playlist name from Spotify
            embedUrl: 'https://open.spotify.com/embed/playlist/1FF0ZcjKMp4pXZEbQdv4Oy?utm_source=generator'
        },
        {
            id: '6GiV8bx7Qsdsyu43lkSmSw',
            name: 'Category 10', // Will be replaced with actual playlist name from Spotify
            embedUrl: 'https://open.spotify.com/embed/playlist/6GiV8bx7Qsdsyu43lkSmSw?utm_source=generator'
        },
        {
            id: '1q7zj9fY6uksSbMDMBrMjQ',
            name: 'Category 11', // Will be replaced with actual playlist name from Spotify
            embedUrl: 'https://open.spotify.com/embed/playlist/1q7zj9fY6uksSbMDMBrMjQ?utm_source=generator'
        },
        {
            id: '07ENpT7fw3SbuzBuMIwIfg',
            name: 'Category 12', // Will be replaced with actual playlist name from Spotify
            embedUrl: 'https://open.spotify.com/embed/playlist/07ENpT7fw3SbuzBuMIwIfg?utm_source=generator'
        },
        {
            id: '3Xro0Z8bTqTMqsEIqVMnOU',
            name: 'Category 13', // Will be replaced with actual playlist name from Spotify
            embedUrl: 'https://open.spotify.com/embed/playlist/3Xro0Z8bTqTMqsEIqVMnOU?utm_source=generator'
        },
        {
            id: '6BkeJZZXFyCIe8ioZcTPSh',
            name: 'Category 14', // Will be replaced with actual playlist name from Spotify
            embedUrl: 'https://open.spotify.com/embed/playlist/6BkeJZZXFyCIe8ioZcTPSh?utm_source=generator'
        },
        {
            id: '11y6TdxNbv3xF1Kt3IGzrs',
            name: 'New Playlist', // Will be replaced with actual playlist name from Spotify
            embedUrl: 'https://open.spotify.com/embed/playlist/11y6TdxNbv3xF1Kt3IGzrs?utm_source=generator'
        }
    ];
    
    console.log('=== CATEGORY SELECTION INIT ===');
    console.log('Using embedded playlists:', embeddedPlaylists.length);
    console.log('Embedded playlist IDs:', embeddedPlaylists.map(p => p.id));
    
    // Fetch playlist names directly from Spotify API using playlist IDs
    // This works for public playlists even if they're not in the user's playlists
    const karaokePartyPlaylists = [];
    for (const embeddedPlaylist of embeddedPlaylists) {
        try {
            // Fetch playlist details directly by ID (works for public playlists)
            // Don't use market parameter - let Spotify use user's market automatically
            const response = await spotifyFetch(`https://api.spotify.com/v1/playlists/${embeddedPlaylist.id}`);
            
            if (response.ok) {
                const playlistData = await response.json();
                console.log(`✓ Playlist ${embeddedPlaylist.id} ("${playlistData.name}"):`);
                console.log(`  - Public: ${playlistData.public}`);
                console.log(`  - Collaborative: ${playlistData.collaborative}`);
                console.log(`  - Owner: ${playlistData.owner?.display_name || playlistData.owner?.id || 'Unknown'}`);
                console.log(`  - Tracks: ${playlistData.tracks?.total || 0}`);
                
                karaokePartyPlaylists.push({
                    id: embeddedPlaylist.id,
                    name: playlistData.name || embeddedPlaylist.name,
                    embedUrl: embeddedPlaylist.embedUrl,
                    isPublic: playlistData.public === true
                });
            } else {
                // If fetch fails with 403, investigate the cause
                if (response.status === 403) {
                    let errorDetails = '';
                    try {
                        const errorData = await response.json();
                        errorDetails = JSON.stringify(errorData);
                    } catch (e) {
                        errorDetails = await response.text().catch(() => 'No error details');
                    }
                    
                    console.error(`❌ Playlist ${embeddedPlaylist.id} returned 403 Forbidden.`);
                    console.error(`   Error details:`, errorDetails);
                    console.error(`   Possible causes:`);
                    console.error(`   1. Access token missing required scopes (need playlist-read-private)`);
                    console.error(`   2. Regional restrictions on playlist content`);
                    console.error(`   3. Spotify app not approved/whitelisted`);
                    console.error(`   4. User's account has restrictions`);
                    
                    // Check if we have the right scopes
                    console.error(`   Current scopes: ${SPOTIFY_SCOPES}`);
                } else {
                    console.error(`❌ Failed to fetch playlist ${embeddedPlaylist.id}: ${response.status} ${response.statusText}`);
                }
                // Still add it with configured name so the UI works, but tracks won't load
                karaokePartyPlaylists.push({
                    id: embeddedPlaylist.id,
                    name: embeddedPlaylist.name,
                    embedUrl: embeddedPlaylist.embedUrl,
                    isPublic: false
                });
            }
        } catch (error) {
            // If there's an error, use the configured name
            console.error(`Error fetching playlist ${embeddedPlaylist.id}:`, error);
            karaokePartyPlaylists.push({
                id: embeddedPlaylist.id,
                name: embeddedPlaylist.name,
                embedUrl: embeddedPlaylist.embedUrl,
                isPublic: false
            });
        }
    }
    
    console.log('Loaded embedded playlists:', karaokePartyPlaylists.length);
    console.log('Playlist names:', karaokePartyPlaylists.map(p => p.name));
    
    // Show all embedded playlists (these are the only available categories)
    displayedPlaylists = karaokePartyPlaylists;
    
    console.log(`✅ Creating buttons for ${displayedPlaylists.length} playlists`);
    
    // If there are exactly 6 playlists (same as required categories), auto-select all of them
    if (displayedPlaylists.length === 6) {
        console.log('Auto-selecting all 6 playlists since there are exactly 6 available');
        selectedCategoryPlaylists = displayedPlaylists.map(p => p.id);
        selectedCategoryNames = displayedPlaylists.map(p => p.name);
        
        // Mark all buttons as selected
        displayedPlaylists.forEach((playlist, index) => {
            const button = grid.children[index];
            if (button) {
                button.classList.add('selected');
            }
        });
    } else {
        // Don't pre-select any playlists - user must select 6 manually
        selectedCategoryPlaylists = [];
        selectedCategoryNames = [];
    }
    
    // Create buttons for each playlist
    let buttonCount = 0;
    displayedPlaylists.forEach((playlist, index) => {
        const button = document.createElement('button');
        button.className = 'playlist-button';
        button.textContent = playlist.name;
        button.dataset.playlistId = playlist.id;
        button.dataset.playlistName = playlist.name;
        
        // No pre-selection - all buttons start unselected
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            togglePlaylistSelection(playlist.id, playlist.name, button);
        });
        
        grid.appendChild(button);
        buttonCount++;
        console.log(`  ✓ Created button ${buttonCount}: "${playlist.name}"`);
        
        // Adjust font size if text wraps
        adjustPlaylistButtonFontSize(button);
    });
    
    // Custom Playlist button - opens dropdown of user's Spotify playlists
    const customBtn = document.createElement('button');
    customBtn.type = 'button';
    customBtn.className = 'playlist-button custom-playlist-btn';
    customBtn.textContent = 'Custom Playlist';
    customBtn.dataset.customTrigger = 'true';
    grid.appendChild(customBtn);
    // Don't run adjustPlaylistButtonFontSize on Custom Playlist so it keeps same font size as other category buttons
    
    // Dropdown for custom playlists (user's Spotify library)
    let dropdownEl = document.getElementById('customPlaylistDropdown');
    if (!dropdownEl) {
        dropdownEl = document.createElement('div');
        dropdownEl.id = 'customPlaylistDropdown';
        dropdownEl.className = 'custom-playlist-dropdown';
        dropdownEl.setAttribute('aria-hidden', 'true');
        const content = document.querySelector('.category-selection-content');
        if (content) content.appendChild(dropdownEl);
    }
    dropdownEl.innerHTML = '';
    const dropdownTitle = document.createElement('div');
    dropdownTitle.className = 'custom-playlist-dropdown-title';
    dropdownTitle.textContent = 'Select from your playlists (part of your 6 categories)';
    dropdownEl.appendChild(dropdownTitle);
    const listWrap = document.createElement('div');
    listWrap.className = 'custom-playlist-dropdown-list';
    dropdownEl.appendChild(listWrap);
    
    customBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = dropdownEl.classList.contains('open');
        if (isOpen) {
            closeCustomPlaylistDropdown();
        } else {
            openCustomPlaylistDropdown(listWrap);
        }
    });
    
    console.log(`✅ Total buttons created: ${buttonCount} + Custom Playlist`);
    
    updateCategorySelectionUI();
    } finally {
    if (categorySpinner) categorySpinner.classList.add('hidden');
    grid.style.visibility = '';
    grid.style.minHeight = '';
    }
}

/** Fill the custom playlist dropdown list from spotifyPlaylists (used by open and by refresh). */
function populateCustomPlaylistDropdownList(listWrap) {
    if (!listWrap) return;
    if (!spotifyPlaylists || spotifyPlaylists.length === 0) {
        listWrap.innerHTML = '<div class="custom-playlist-dropdown-empty">No playlists in your library. Create playlists in Spotify first.</div>';
    } else {
        listWrap.innerHTML = '';
        spotifyPlaylists.forEach((playlist) => {
            const id = playlist.id;
            const name = playlist.name || 'Unnamed';
            const isSelected = selectedCategoryPlaylists.includes(id);
            const atMax = selectedCategoryPlaylists.length >= 6;
            const row = document.createElement('label');
            row.className = 'custom-playlist-item';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.dataset.playlistId = id;
            checkbox.dataset.playlistName = name;
            checkbox.checked = isSelected;
            checkbox.disabled = !isSelected && atMax;
            const span = document.createElement('span');
            span.className = 'custom-playlist-item-name';
            span.textContent = name;
            row.appendChild(checkbox);
            row.appendChild(span);
            row.addEventListener('change', (e) => {
                if (e.target !== checkbox) return;
                toggleCustomPlaylistSelection(checkbox);
                updateCategorySelectionUI();
                updateCustomPlaylistDropdownCheckboxes(listWrap);
            });
            listWrap.appendChild(row);
        });
    }
}

function openCustomPlaylistDropdown(listWrap) {
    const dropdownEl = document.getElementById('customPlaylistDropdown');
    const customBtn = document.querySelector('.custom-playlist-btn');
    if (!dropdownEl || !listWrap) return;
    populateCustomPlaylistDropdownList(listWrap);
    dropdownEl.classList.add('open');
    dropdownEl.setAttribute('aria-hidden', 'false');
    // Close when clicking outside (single listener, removed after first outside click)
    const closeHandler = (e) => {
        if (dropdownEl.contains(e.target) || (customBtn && customBtn.contains(e.target))) return;
        closeCustomPlaylistDropdown();
        document.removeEventListener('click', closeHandler);
    };
    setTimeout(() => document.addEventListener('click', closeHandler), 0);
}

function closeCustomPlaylistDropdown() {
    const dropdownEl = document.getElementById('customPlaylistDropdown');
    if (dropdownEl) {
        dropdownEl.classList.remove('open');
        dropdownEl.setAttribute('aria-hidden', 'true');
    }
}

/** Clear Spotify playlist cache and refetch from API; update custom playlist dropdown if open. */
async function refreshCategoriesFromSpotify() {
    await ensureValidSpotifyAccessToken();
    const btn = document.getElementById('refreshCategoriesBtn');
    if (!btn || !spotifyAccessToken) return;
    btn.disabled = true;
    const originalText = btn.textContent;
    btn.textContent = 'Refreshing…';
    try {
        spotifyPlaylists = [];
        await fetchUserPlaylists();
        const dropdownEl = document.getElementById('customPlaylistDropdown');
        if (dropdownEl && dropdownEl.classList.contains('open')) {
            const listWrap = dropdownEl.querySelector('.custom-playlist-dropdown-list');
            if (listWrap) populateCustomPlaylistDropdownList(listWrap);
        }
    } finally {
        btn.disabled = false;
        btn.textContent = originalText;
    }
}

function toggleCustomPlaylistSelection(checkbox) {
    const id = checkbox.dataset.playlistId;
    const name = checkbox.dataset.playlistName || '';
    const idx = selectedCategoryPlaylists.indexOf(id);
    if (idx > -1) {
        selectedCategoryPlaylists.splice(idx, 1);
        selectedCategoryNames.splice(idx, 1);
        checkbox.checked = false;
    } else {
        if (selectedCategoryPlaylists.length < 6) {
            selectedCategoryPlaylists.push(id);
            selectedCategoryNames.push(name);
            checkbox.checked = true;
        }
    }
}

function updateCustomPlaylistDropdownCheckboxes(listWrap) {
    if (!listWrap) return;
    const atMax = selectedCategoryPlaylists.length >= 6;
    listWrap.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
        const id = cb.dataset.playlistId;
        const isSelected = selectedCategoryPlaylists.includes(id);
        cb.checked = isSelected;
        cb.disabled = !isSelected && atMax;
    });
}

function updateCategorySelectionUI() {
    const buttons = document.querySelectorAll('.playlist-button:not(.custom-playlist-btn)');
    const continueBtn = document.getElementById('categoryContinueBtn');
    
    buttons.forEach(button => {
        const playlistId = button.dataset.playlistId;
        if (!playlistId) return;
        const isSelected = selectedCategoryPlaylists.includes(playlistId);
        
        if (selectedCategoryPlaylists.length === 6 && !isSelected) {
            button.classList.add('disabled');
        } else {
            button.classList.remove('disabled');
        }
    });
    
    // Update Custom Playlist dropdown checkboxes if open
    const dropdownEl = document.getElementById('customPlaylistDropdown');
    if (dropdownEl && dropdownEl.classList.contains('open')) {
        const listWrap = dropdownEl.querySelector('.custom-playlist-dropdown-list');
        updateCustomPlaylistDropdownCheckboxes(listWrap);
    }
    
    if (continueBtn) {
        if (selectedCategoryPlaylists.length === 6) {
            continueBtn.style.display = 'block';
        } else {
            continueBtn.style.display = 'none';
        }
    }
}

// Adjust font size for playlist buttons to prevent them from growing
function adjustPlaylistButtonFontSize(button) {
    // Reset to original size first
    button.style.fontSize = '';
    const originalOverflow = button.style.overflow;
    button.style.overflow = 'visible'; // Temporarily allow overflow to measure
    
    // Wait for layout to update
    requestAnimationFrame(() => {
        const computed = window.getComputedStyle(button);
        const rootComputed = window.getComputedStyle(document.documentElement);
        const rootFontSizePx = parseFloat(rootComputed.fontSize) || 16;

        // Use the button's *actual* rendered height (responsive CSS uses clamp()).
        const maxHeightPx = button.clientHeight || 80;

        // Start from whatever CSS computed for this button (keeps Custom Playlist consistent).
        let fontSizePx = parseFloat(computed.fontSize) || (1.8 * rootFontSizePx);
        const minFontSizePx = 0.7 * rootFontSizePx; // mirrors previous 0.7rem minimum

        button.style.fontSize = `${fontSizePx}px`;
        let contentHeightPx = button.scrollHeight;

        // If content exceeds button height, reduce font size.
        while (contentHeightPx > maxHeightPx && fontSizePx > minFontSizePx) {
            fontSizePx -= 1;
            button.style.fontSize = `${fontSizePx}px`;
            contentHeightPx = button.scrollHeight;
        }
        
        // Restore overflow setting
        button.style.overflow = originalOverflow || 'hidden';
    });
}

// Toggle playlist selection
function togglePlaylistSelection(playlistId, playlistName, button) {
    // If button is disabled (when 6 are selected and this one isn't selected), don't allow selection
    if (button.classList.contains('disabled')) {
        return;
    }
    
    const index = selectedCategoryPlaylists.indexOf(playlistId);
    
    if (index > -1) {
        // Deselect - always allow deselection
        selectedCategoryPlaylists.splice(index, 1);
        selectedCategoryNames.splice(index, 1);
        button.classList.remove('selected');
    } else {
        // Select (only if we have less than 6)
        if (selectedCategoryPlaylists.length < 6) {
            selectedCategoryPlaylists.push(playlistId);
            selectedCategoryNames.push(playlistName);
            button.classList.add('selected');
        }
    }
    
    updateCategorySelectionUI();
}

// Load tracks for selected category playlists. options.excludeTrackIds = Set of track URIs to exclude (e.g. for "restart with new songs, no repeats").
async function loadSelectedCategoryPlaylists(options) {
    await ensureValidSpotifyAccessToken();
    if (!spotifyAccessToken || selectedCategoryPlaylists.length !== 6) {
        console.error('Cannot load category playlists - missing token or not 6 selected:', {
            hasToken: !!spotifyAccessToken,
            selectedCount: selectedCategoryPlaylists.length,
            selectedNames: selectedCategoryNames
        });
        return;
    }
    
    // Show loading spinner and hide board while loading
    const loadingSpinner = document.getElementById('loadingSpinner');
    const board = document.getElementById('board');
    if (loadingSpinner) loadingSpinner.classList.remove('hidden');
    if (board) board.style.display = 'none';
    
    // IMPORTANT: Set flag FIRST to prevent loadCategoryPlaylists from interfering
    isLoadingSelectedPlaylists = true;
    
    try {
    console.log('Loading tracks for selected playlists:', selectedCategoryNames);
    console.log('selectedCategoryPlaylists count:', selectedCategoryPlaylists.length);
    
    // IMPORTANT: Clear any existing category playlists first
    // We need to ensure nothing interferes with our loading
    categoryPlaylists = [];
    
    // Load exactly 6 playlists (matching the 6 selected)
    // IMPORTANT: Order must match! categoryPlaylists[i] must correspond to selectedCategoryNames[i]
    console.log('=== LOADING CATEGORY PLAYLISTS ===');
    console.log('selectedCategoryPlaylists (IDs):', selectedCategoryPlaylists);
    console.log('selectedCategoryNames (Names):', selectedCategoryNames);
    
    // Verify arrays are the same length
    if (selectedCategoryPlaylists.length !== selectedCategoryNames.length) {
        console.error('ERROR: selectedCategoryPlaylists and selectedCategoryNames have different lengths!');
        console.error('selectedCategoryPlaylists.length:', selectedCategoryPlaylists.length);
        console.error('selectedCategoryNames.length:', selectedCategoryNames.length);
    }
    
    // Create a mapping to verify order
    const playlistMapping = [];
    
    for (let i = 0; i < selectedCategoryPlaylists.length; i++) {
        const playlistId = selectedCategoryPlaylists[i];
        const playlistName = selectedCategoryNames[i];
        
        console.log(`\n[${i}] Loading playlist: "${playlistName}" (ID: ${playlistId})`);
        
        const tracks = await loadPlaylistTracksById(playlistId);
        
        // Make sure we're pushing a single array of tracks, not multiple
        if (Array.isArray(tracks)) {
            categoryPlaylists.push(tracks);
            
            // Store mapping for verification
            playlistMapping.push({
                index: i,
                name: playlistName,
                id: playlistId,
                trackCount: tracks.length,
                sampleTracks: tracks.slice(0, 3).map(t => `${t.name} - ${t.artist}`)
            });
            
            console.log(`[${i}] ✓ Loaded ${tracks.length} tracks for playlist "${playlistName}"`);
            console.log(`[${i}] ✓ categoryPlaylists[${i}] now contains ${categoryPlaylists[i]?.length || 0} tracks`);
            console.log(`[${i}] Sample tracks:`, tracks.slice(0, 3).map(t => `${t.name} - ${t.artist}`));
        } else {
            console.error(`[${i}] ✗ Error: tracks is not an array for playlist ${i}:`, tracks);
        }
    }
    
    console.log('\n=== CATEGORY PLAYLISTS LOADED ===');
    console.log('Final mapping (index -> playlist):', playlistMapping);
    console.log('categoryPlaylists array lengths:', categoryPlaylists.map((p, i) => ({
        index: i,
        name: selectedCategoryNames[i],
        trackCount: p ? p.length : 0
    })));
    
    console.log('After loading loop - categoryPlaylists.length:', categoryPlaylists.length);
    console.log('Loaded tracks for selected categories:', categoryPlaylists);
    console.log('Selected category names:', selectedCategoryNames);
    
    // Double-check we still have exactly 6 (protect against interference)
    if (categoryPlaylists.length !== 6) {
        console.error(`ERROR: categoryPlaylists has ${categoryPlaylists.length} items, expected 6!`);
        console.error('Current categoryPlaylists:', categoryPlaylists);
        console.error('Trimming to first 6 items...');
        categoryPlaylists = categoryPlaylists.slice(0, 6);
        console.log('After trimming - categoryPlaylists.length:', categoryPlaylists.length);
    }
    
    console.log('Verifying arrays before initGame:', {
        selectedPlaylists: selectedCategoryPlaylists.length,
        categoryPlaylists: categoryPlaylists.length,
        selectedNames: selectedCategoryNames.length,
        names: selectedCategoryNames
    });
    
    console.log('Final state before initGame:', {
        selectedPlaylists: selectedCategoryPlaylists.length,
        categoryPlaylists: categoryPlaylists.length,
        selectedNames: selectedCategoryNames.length
    });
    
    // Reinitialize game with new categories (pass options for e.g. excludeTrackIds)
    initGame(options || {});
    } finally {
    isLoadingSelectedPlaylists = false;
    if (loadingSpinner) loadingSpinner.classList.add('hidden');
    if (board) board.style.display = 'grid';
    setTimeout(() => fitBoardToViewport && fitBoardToViewport(), 50);
    }
}

function updatePlaylistSelect() {
    const select = document.getElementById('playlistSelect');
    if (!select) return;
    
    select.innerHTML = '<option value="">Select a playlist...</option>';
    
    spotifyPlaylists.forEach(playlist => {
        const option = document.createElement('option');
        option.value = playlist.id;
        option.textContent = playlist.name;
        select.appendChild(option);
    });
    
    select.style.display = 'inline-block';
    select.addEventListener('change', async (e) => {
        if (e.target.value) {
            await loadPlaylistTracks(e.target.value);
        }
    });
}

async function loadPlaylistTracks(playlistId) {
    await ensureValidSpotifyAccessToken();
    if (!spotifyAccessToken) return;
    
    try {
        let allTracks = [];
        let url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=100`;
        
        while (url && allTracks.length < 100) { // Limit to 100 tracks for performance
            const response = await spotifyFetch(url);
            
            if (!response.ok) {
                throw new Error('Failed to fetch playlist tracks');
            }
            
            const data = await response.json();
            const tracks = data.items
                .filter(item => item.track && item.track.uri)
                .map(item => ({
                    uri: item.track.uri,
                    name: item.track.name,
                    artist: item.track.artists.map(a => a.name).join(', ')
                }));
            
            allTracks = allTracks.concat(tracks);
            url = data.next;
        }
        
        selectedPlaylistTracks = allTracks;
        assignTracksToTiles();
        console.log(`Loaded ${allTracks.length} tracks from playlist`);
    } catch (error) {
        console.error('Error loading playlist tracks:', error);
    }
}

function assignTracksToTiles() {
    // Shuffle tracks and assign to 6x5 grid
    const shuffled = [...selectedPlaylistTracks].sort(() => 0.5 - Math.random());
    
    tileSpotifyTracks = [];
    tileAudioFileNames = [];
    
    let trackIndex = 0;
    for (let col = 0; col < 6; col++) {
        tileSpotifyTracks[col] = [];
        tileAudioFileNames[col] = [];
        for (let row = 0; row < 5; row++) {
            if (trackIndex < shuffled.length) {
                const track = shuffled[trackIndex];
                tileSpotifyTracks[col][row] = track;
                tileAudioFileNames[col][row] = `${track.name} - ${track.artist}`;
                trackIndex++;
            } else {
                // Reuse tracks if we have fewer than 30
                const track = shuffled[trackIndex % shuffled.length];
                tileSpotifyTracks[col][row] = track;
                tileAudioFileNames[col][row] = `${track.name} - ${track.artist}`;
                trackIndex++;
            }
        }
    }
}

function updateSpotifyUI() {
    const loginBtn = document.getElementById('spotifyLoginBtn');
    const logoutBtn = document.getElementById('spotifyLogoutBtn');
    const statusDiv = document.getElementById('spotifyStatus');
    const statusText = document.getElementById('spotifyStatusText');
    
    // Connect page elements (first screen)
    const connectLoginBtn = document.getElementById('connectSpotifyLoginBtn');
    const connectContinueBtn = document.getElementById('connectContinueBtn');
    const connectPage = document.getElementById('connectPage');
    const isConnectPageVisible = connectPage &&
        connectPage.style.display !== 'none' &&
        getComputedStyle(connectPage).display !== 'none';
    
    // Landing page elements
    const landingLoginBtn = document.getElementById('landingSpotifyLoginBtn');
    const continueBtn = document.getElementById('continueBtn');
    const landingPage = document.getElementById('landingPage');
    
    // Disconnect button (on landing page, below skip button)
    const disconnectBtn = document.getElementById('spotifyDisconnectBtn');
    
    // Check if landing page is visible
    const isLandingPageVisible = landingPage && 
        landingPage.style.display !== 'none' && 
        getComputedStyle(landingPage).display !== 'none';
    
    if (spotifyAccessToken) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'inline-block';
        // Show disconnect button only on landing page when connected
        if (disconnectBtn) {
            disconnectBtn.style.display = isLandingPageVisible ? 'block' : 'none';
        }
        // Hide status div on game board (only show on landing page if needed)
        if (statusDiv) statusDiv.style.display = 'none';
        if (statusText) {
            statusText.textContent = spotifyReady 
                ? 'Spotify Connected ✓' 
                : 'Connecting to Spotify...';
        }
        
        // Only hide login once the player is actually ready (stale tokens must stay clickable).
        if (spotifyReady) {
            if (connectContinueBtn) connectContinueBtn.style.display = 'block';
            if (connectLoginBtn) connectLoginBtn.style.display = 'none';
            if (continueBtn) continueBtn.style.display = 'block';
            if (landingLoginBtn) landingLoginBtn.style.display = 'none';
        } else {
            if (connectContinueBtn) connectContinueBtn.style.display = 'none';
            if (connectLoginBtn) connectLoginBtn.style.display = 'block';
            if (continueBtn) continueBtn.style.display = 'none';
            if (landingLoginBtn) landingLoginBtn.style.display = 'block';
        }
    } else {
        if (loginBtn) loginBtn.style.display = 'inline-block';
        if (logoutBtn) logoutBtn.style.display = 'none';
        // Hide disconnect button when not connected
        if (disconnectBtn) disconnectBtn.style.display = 'none';
        if (statusDiv) statusDiv.style.display = 'none';
        
        // Connect page: show Connect, hide Continue
        if (connectContinueBtn) connectContinueBtn.style.display = 'none';
        if (connectLoginBtn) connectLoginBtn.style.display = 'block';
        
        // Hide Continue button on landing page
        if (continueBtn) continueBtn.style.display = 'none';
        if (landingLoginBtn) landingLoginBtn.style.display = 'block';
    }
}

// Initialize the game. options.excludeTrackIds = Set of track URIs to exclude (no repeats when restarting with new songs).
function initGame(options) {
    options = options || {};
    const excludeTrackIds = options.excludeTrackIds || null;
    resetWinnerCelebrationState();
    lastFinalizedTile = null;
    updateUndoSongButtonState();
    if (teams.length > 0) {
        teams.forEach(team => {
            if (typeof team.correctSongs !== 'number') {
                team.correctSongs = 0;
            }
        });
    } else {
        teamOneCorrectSongs = 0;
        teamTwoCorrectSongs = 0;
    }
    console.log('=== initGame called ===', excludeTrackIds ? `(excluding ${excludeTrackIds.size} track URIs)` : '');
    console.log('selectedCategoryPlaylists.length:', selectedCategoryPlaylists.length);
    console.log('categoryPlaylists.length:', categoryPlaylists.length);
    console.log('selectedCategoryNames.length:', selectedCategoryNames.length);
    console.log('selectedCategoryNames:', selectedCategoryNames);
    
    // Check if we have selected playlists (from category selection page)
    if (selectedCategoryPlaylists.length === 6 && categoryPlaylists.length === 6 && selectedCategoryNames.length === 6) {
        console.log('✓ USING SELECTED PLAYLISTS AS CATEGORIES:', selectedCategoryNames);
        console.log('=== MAPPING CATEGORIES TO PLAYLISTS ===');
        console.log('selectedCategoryNames:', selectedCategoryNames);
        console.log('categoryPlaylists lengths:', categoryPlaylists.map(p => p ? p.length : 0));
        
        // Use selected playlists as categories
        // CRITICAL: categoryPlaylists[i] must correspond to selectedCategoryNames[i] and gameBoard[i]
        console.log('\n=== CREATING GAME BOARD ===');
        console.log('selectedCategoryNames order:', selectedCategoryNames);
        console.log('categoryPlaylists lengths:', categoryPlaylists.map(p => p ? p.length : 0));
        
        gameBoard = selectedCategoryNames.map((categoryName, categoryIndex) => {
            const tracks = categoryPlaylists[categoryIndex];
            
            if (!tracks || tracks.length === 0) {
                console.error(`[initGame] ERROR: categoryPlaylists[${categoryIndex}] is empty for "${categoryName}"!`);
            }
            
            console.log(`[initGame] gameBoard[${categoryIndex}] = "${categoryName}"`);
            console.log(`[initGame]   -> categoryPlaylists[${categoryIndex}] has ${tracks ? tracks.length : 0} tracks`);
            if (tracks && tracks.length > 0) {
                console.log(`[initGame]   -> Sample tracks:`, tracks.slice(0, 3).map(t => `${t.name} - ${t.artist}`));
            }
            
            // Create 5 "questions" — one song per value bucket ($100, $200, $300, $400, $500).
            // Each playlist is pre-bucketed by artist popularity: valueBucket 0 = $100 (highest), 4 = $500 (lowest).
            const questions = [];
            
            // Initialize tile storage arrays for this category
            if (!tileSpotifyTracks[categoryIndex]) {
                tileSpotifyTracks[categoryIndex] = [];
            }
            if (!tileAudioFileNames[categoryIndex]) {
                tileAudioFileNames[categoryIndex] = [];
            }
            if (!tileAlbumCovers[categoryIndex]) {
                tileAlbumCovers[categoryIndex] = [];
            }
            
            // Group tracks by valueBucket (0=$100 .. 4=$500)
            const byBucket = [[], [], [], [], []];
            tracks.forEach((t) => {
                const b = typeof t.valueBucket === 'number' && t.valueBucket >= 0 && t.valueBucket <= 4 ? t.valueBucket : 0;
                byBucket[b].push(t);
            });
            
            for (let i = 0; i < 5; i++) {
                // Pick one random track from the bucket for this row (one $100, one $200, etc.). Exclude already-used URIs if requested.
                let bucketTracks = byBucket[i];
                if (excludeTrackIds && bucketTracks.length > 0) {
                    const allowed = bucketTracks.filter((t) => !excludeTrackIds.has(t.uri));
                    if (allowed.length > 0) bucketTracks = allowed;
                }
                let selectedTrack;
                if (bucketTracks.length > 0) {
                    const randomIndex = Math.floor(Math.random() * bucketTracks.length);
                    selectedTrack = bucketTracks[randomIndex];
                } else {
                    // Fallback if bucket is empty (e.g. very small playlist)
                    let fallback = tracks.filter((t) => (t.valueBucket ?? 0) === i);
                    if (excludeTrackIds && fallback.length > 0) {
                        const allowed = fallback.filter((t) => !excludeTrackIds.has(t.uri));
                        if (allowed.length > 0) fallback = allowed;
                    }
                    selectedTrack = (fallback.length > 0 ? fallback[Math.floor(Math.random() * fallback.length)] : tracks[Math.floor(Math.random() * tracks.length)]);
                }
                
                // Store the track for this tile
                tileSpotifyTracks[categoryIndex][i] = selectedTrack;
                tileAudioFileNames[categoryIndex][i] = `${selectedTrack.name} - ${selectedTrack.artist}`;
                tileAlbumCovers[categoryIndex][i] = selectedTrack.albumCover || null;
                
                // Just use placeholder questions - the actual music comes from the playlist
                questions.push({
                    question: `Play song: ${selectedTrack.name} - ${selectedTrack.artist}`,
                    answer: "Song"
                });
                
                console.log(`[initGame]   -> Tile [${categoryIndex}][${i}] ($${dollarValues[i]}) assigned: "${selectedTrack.name} - ${selectedTrack.artist}"`);
            }
            
            return {
                category: categoryName,
                questions: questions,
                playlistIndex: categoryIndex
            };
        });
        
        console.log('✓ Game board created with categories:', gameBoard.map(c => c.category));
    } else {
        console.log('✗ USING DEFAULT CATEGORIES (selected playlists condition not met)');
        console.log('Reason:', {
            selectedPlaylistsLength: selectedCategoryPlaylists.length,
            categoryPlaylistsLength: categoryPlaylists.length,
            selectedNamesLength: selectedCategoryNames.length,
            selectedNames: selectedCategoryNames
        });
        // Don't load local music files - we only use Spotify playlists
        // If no playlists are selected, the game shouldn't initialize
        console.warn('⚠️ Cannot initialize game without selected playlists. Please select categories first.');
        return; // Exit early - don't create game board without playlists
    }
    
    // Update scoreboard display if teams are configured
    if (teams.length > 0) {
        updateScoreboardDisplay();
    }
    
    renderBoard();
    updateScoreboard();
}

// Render the game board
function renderBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    
    console.log('Rendering board with categories:', gameBoard.map(c => c.category));
    
    // Render category headers
    gameBoard.forEach(categoryData => {
        const header = document.createElement('div');
        header.className = 'category-header';
        header.textContent = categoryData.category;
        console.log(`Rendered category header: ${categoryData.category}`);
        boardElement.appendChild(header);
    });
    
    // Ensure board is displayed after rendering
    if (boardElement) {
        boardElement.style.display = 'grid';
    }
    
    // Render question cells
    for (let row = 0; row < 5; row++) {
        gameBoard.forEach((categoryData, colIndex) => {
            const cell = document.createElement('div');
            cell.className = 'question-cell';
            cell.textContent = `$${dollarValues[row]}`;
            cell.dataset.category = colIndex;
            cell.dataset.value = row;
            cell.addEventListener('click', () => handleCellClick(cell, colIndex, row));
            boardElement.appendChild(cell);
            
            // Adjust font size to fit the cell
            adjustQuestionCellFontSize(cell);
        });
    }
    
    // Fit board rows to available viewport
    fitBoardToViewport();

    // Re-adjust font sizes after a short delay to ensure layout is complete
    setTimeout(() => {
        const allCells = document.querySelectorAll('.question-cell');
        allCells.forEach(cell => adjustQuestionCellFontSize(cell));
        fitBoardToViewport();
    }, 100);
}

function isElementVisible(el) {
    if (!el) return false;
    const style = window.getComputedStyle(el);
    return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
}

function fitBoardToViewport() {
    const gameContainer = document.getElementById('gameContainer');
    const board = document.getElementById('board');
    if (!gameContainer || !board) return;
    if (!isElementVisible(gameContainer) || !isElementVisible(board)) return;

    // The CSS now uses fr units which automatically fit the board to available space
    // We just need to ensure the board fills the remaining container height
    
    const header = gameContainer.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;
    const headerStyle = header ? window.getComputedStyle(header) : null;
    const headerMarginBottom = headerStyle ? parseFloat(headerStyle.marginBottom) || 0 : 0;
    const totalHeaderSpace = headerHeight + headerMarginBottom;
    
    const containerStyle = window.getComputedStyle(gameContainer);
    const padTop = parseFloat(containerStyle.paddingTop) || 0;
    const padBottom = parseFloat(containerStyle.paddingBottom) || 0;
    
    // Calculate available height for the board
    const available = Math.max(0, gameContainer.clientHeight - totalHeaderSpace - padTop - padBottom);
    
    // Set the board height explicitly to fill remaining space
    board.style.height = `${available}px`;
    
    // Debug
    console.log('[fitBoardToViewport]', {
        containerH: gameContainer.clientHeight,
        headerH: headerHeight,
        headerMarginBottom,
        totalHeaderSpace,
        containerPad: { top: padTop, bottom: padBottom },
        boardHeight: available,
    });

    // After resizing, re-run fit for text overflow on category headers
    const categoryHeaders = board.querySelectorAll('.category-header');
    categoryHeaders.forEach(h => adjustCategoryHeaderFontSize(h));
}

// Adjust font size for category headers to fit text
function adjustCategoryHeaderFontSize(header) {
    if (!header) return;
    
    // Reset to CSS default
    header.style.fontSize = '';
    
    // Check if text overflows and reduce if needed
    requestAnimationFrame(() => {
        const maxIterations = 10;
        let iterations = 0;
        let currentSize = parseFloat(window.getComputedStyle(header).fontSize);
        const minSize = 10;
        
        while ((header.scrollWidth > header.clientWidth || header.scrollHeight > header.clientHeight) 
               && currentSize > minSize && iterations < maxIterations) {
            currentSize -= 2;
            header.style.fontSize = `${currentSize}px`;
            iterations++;
        }
    });
}

// Adjust font size for modal buttons to ensure text fits (uses actual button size so it scales with viewport)
function adjustModalButtonFontSize(button) {
    button.style.fontSize = '';
    const originalOverflow = button.style.overflow;
    button.style.overflow = 'visible';

    requestAnimationFrame(() => {
        // Use actual rendered dimensions (scale with viewport when using vmin in CSS)
        const vminPx = Math.min(window.innerWidth, window.innerHeight) / 100;
        const fixedHeight = button.offsetHeight || Math.round(8 * vminPx);
        const fixedWidth = button.offsetWidth || Math.round(16 * vminPx);
        const paddingV = Math.round(1.2 * vminPx);
        const paddingH = Math.round(1.6 * vminPx);
        const availableHeight = Math.max(Math.round(2 * vminPx), fixedHeight - paddingV);
        const availableWidth = Math.max(Math.round(4 * vminPx), fixedWidth - paddingH);

        let fontSize = 1.75;
        const minFontSize = 1.1;

        button.style.fontSize = `${fontSize}rem`;
        let contentHeight = button.scrollHeight;

        while (contentHeight > availableHeight && fontSize > minFontSize) {
            fontSize -= 0.05;
            button.style.fontSize = `${fontSize}rem`;
            contentHeight = button.scrollHeight;
        }

        const tempSpan = document.createElement('span');
        tempSpan.style.position = 'absolute';
        tempSpan.style.visibility = 'hidden';
        tempSpan.style.whiteSpace = 'nowrap';
        tempSpan.style.fontSize = button.style.fontSize;
        tempSpan.style.fontFamily = getComputedStyle(button).fontFamily;
        tempSpan.style.fontWeight = getComputedStyle(button).fontWeight;
        tempSpan.style.textTransform = getComputedStyle(button).textTransform;
        tempSpan.textContent = button.textContent;
        document.body.appendChild(tempSpan);
        const textWidth = tempSpan.offsetWidth;
        document.body.removeChild(tempSpan);

        if (textWidth > availableWidth && fontSize > minFontSize) {
            const widthRatio = availableWidth / textWidth;
            fontSize = Math.max(fontSize * widthRatio * 0.95, minFontSize);
            button.style.fontSize = `${fontSize}rem`;
        }

        // Cap at 2 lines: shrink font until content fits in two rows (no third line)
        const lineHeightMultiplier = 1.1; // match CSS line-height on modal scoreboard buttons
        let fontPx = parseFloat(getComputedStyle(button).fontSize) || fontSize * 16;
        let maxTwoLineHeight = 2 * lineHeightMultiplier * fontPx;
        while (button.scrollHeight > maxTwoLineHeight && fontSize > minFontSize) {
            fontSize -= 0.05;
            button.style.fontSize = `${fontSize}rem`;
            fontPx = parseFloat(getComputedStyle(button).fontSize) || fontSize * 16;
            maxTwoLineHeight = 2 * lineHeightMultiplier * fontPx;
        }

        button.style.overflow = originalOverflow || 'hidden';
    });
}

// Adjust font size for question cells to ensure text fits
function adjustQuestionCellFontSize(cell) {
    // Reset to CSS default first
    cell.style.fontSize = '';

    const originalOverflow = cell.style.overflow;
    cell.style.overflow = 'visible'; // allow measurement

    requestAnimationFrame(() => {
        // Start from computed font size (px), shrink until content fits the box
        const computed = window.getComputedStyle(cell);
        const vminPx = Math.min(window.innerWidth, window.innerHeight) / 100;
        let fontPx = parseFloat(computed.fontSize) || Math.round(4 * vminPx);
        const minPx = Math.max(20, Math.round(2.8 * vminPx)); // keep tiles readable, scale with viewport

        // Guard: ensure we have dimensions
        if (cell.clientWidth === 0 || cell.clientHeight === 0) {
            cell.style.overflow = originalOverflow || 'hidden';
            return;
        }

        // Shrink while overflow exists
        // Use scrollWidth/scrollHeight vs clientWidth/clientHeight (includes padding)
        while (
            (cell.scrollWidth > cell.clientWidth || cell.scrollHeight > cell.clientHeight) &&
            fontPx > minPx
        ) {
            fontPx -= 2;
            cell.style.fontSize = `${fontPx}px`;
        }

        cell.style.overflow = originalOverflow || 'hidden';
    });
}

// Handle cell click
async function handleCellClick(cell, categoryIndex, valueIndex) {
    // Check if cell is already disabled
    if (cell.classList.contains('disabled')) {
        return;
    }
    
    // The modal opens only after the song starts (or fails), which can take a few seconds on a slow start.
    // Ignore further tile clicks meanwhile so two play attempts never run at once.
    if (tileClickInProgress) {
        console.log('[handleCellClick] Ignoring click – a tile is still starting its song');
        return;
    }
    tileClickInProgress = true;
    
    const categoryData = gameBoard[categoryIndex];
    
    // Play the specific music for this tile (await it so track name is stored)
    try {
        await playTileMusic(categoryIndex, valueIndex);
    } finally {
        tileClickInProgress = false;
    }
    
    // Get the audio filename and album cover for this tile (after playTileMusic has stored it)
    const audioFileName = tileAudioFileNames[categoryIndex] && tileAudioFileNames[categoryIndex][valueIndex] 
        ? tileAudioFileNames[categoryIndex][valueIndex] 
        : 'Unknown Song';
    const albumCoverUrl = tileAlbumCovers[categoryIndex] && tileAlbumCovers[categoryIndex][valueIndex]
        ? tileAlbumCovers[categoryIndex][valueIndex]
        : null;
    
    console.log(`handleCellClick: categoryIndex=${categoryIndex}, valueIndex=${valueIndex}`);
    console.log(`tileAudioFileNames[${categoryIndex}]:`, tileAudioFileNames[categoryIndex]);
    console.log(`audioFileName:`, audioFileName);
    
    // Store reference to the cell
    selectedCell = cell;
    currentQuestionValue = dollarValues[valueIndex];
    
    // Show modal with audio filename and album cover
    showModal(categoryData.category, dollarValues[valueIndex], audioFileName, albumCoverUrl);
}

// Timer functions
function startTimer() {
    // Clear any existing timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    const timerElement = document.getElementById('modalTimer');
    if (!timerElement) return;
    
    timerSeconds = 60;
    timerElement.textContent = timerSeconds;
    timerElement.style.display = 'block';
    timerElement.style.color = '#ffffff';
    
    timerInterval = setInterval(() => {
        timerSeconds--;
        timerElement.textContent = timerSeconds;
        
        if (timerSeconds <= 0) {
            timerElement.style.color = '#ff0000';
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    const timerElement = document.getElementById('modalTimer');
    if (timerElement) {
        timerElement.style.display = 'none';
    }
}

// Show modal
function showModal(category, value, audioFileName, albumCoverUrl) {
    const modal = document.getElementById('modal');
    const categoryElement = document.getElementById('modalCategory');
    const valueElement = document.getElementById('modalValue');
    const answerElement = document.getElementById('answerText');
    const albumCoverElement = document.getElementById('modalAlbumCover');
    
    // New answer reveal section elements
    const answerRevealSection = document.getElementById('answerRevealSection');
    const answerArtistElement = document.getElementById('answerArtist');
    const answerSongElement = document.getElementById('answerSong');
    const answerCategoryElement = document.getElementById('answerCategory');
    const answerAmountElement = document.getElementById('answerAmount');
    
    categoryElement.textContent = category;
    valueElement.textContent = `$${value}`;
    
    // Parse audioFileName to extract song and artist (format: "Song Name - Artist")
    let songName = audioFileName;
    let artistName = '';
    if (audioFileName && audioFileName.includes(' - ')) {
        const parts = audioFileName.split(' - ');
        songName = parts[0];
        artistName = parts.slice(1).join(' - '); // Handle cases where artist name contains " - "
    }
    
    // Set the audio filename as the answer text (legacy, hidden)
    if (answerElement) {
        answerElement.textContent = audioFileName;
    }
    
    // Populate new answer reveal section
    if (answerArtistElement) answerArtistElement.textContent = artistName;
    if (answerSongElement) answerSongElement.textContent = songName;
    if (answerCategoryElement) answerCategoryElement.textContent = category;
    if (answerAmountElement) answerAmountElement.textContent = `$${value}`;
    
    // Store album cover URL for later display
    if (albumCoverElement) {
        if (albumCoverUrl) {
            albumCoverElement.src = albumCoverUrl;
        } else {
            albumCoverElement.src = '';
        }
    }
    
    // Hide answer and album cover initially - they will be revealed when a button is clicked
    if (answerElement) {
        answerElement.style.display = 'none';
    }
    if (answerRevealSection) {
        answerRevealSection.classList.remove('show');
    }
    if (albumCoverElement) {
        albumCoverElement.style.display = 'none';
    }
    
    // Reset modal content styling
    const modalContent = document.querySelector('#modal .modal-content');
    if (modalContent) {
        modalContent.classList.remove('with-album-cover');
    }
    
    // Show the category and dollar amount at the top (reset from previous question)
    const categoryValueContainer = document.querySelector('.category-value-container');
    if (categoryValueContainer) {
        categoryValueContainer.style.display = 'flex';
    }
    
    // Start the timer
    startTimer();
    
    // Reset button visibility
    const buttonsRow = document.querySelector('.buttons-row');
    const modalScoreboardButtons = document.getElementById('modalScoreboardButtons');
    const moveOnBtnBottom = document.getElementById('moveOnBtnBottom');
    const undoBtnBottom = document.getElementById('undoBtnBottom');
    
    // Hide top buttons row initially
    buttonsRow.style.display = 'none';
    
    // Clear existing buttons and generate dynamic team buttons
    modalScoreboardButtons.innerHTML = '';
    
    // Array to store references to all team buttons
    const teamButtons = [];
    let modalIncorrectBtn = null;
    
    // Generate buttons for all teams
    if (teams.length > 0) {
        teams.forEach((team, index) => {
            const teamBtn = document.createElement('button');
            teamBtn.type = 'button';
            teamBtn.className = 'modal-btn team-btn';
            teamBtn.id = `modalTeam${index + 1}Btn`;
            teamBtn.textContent = team.name;
            teamBtn.style.backgroundColor = team.color;
            teamBtn.style.color = getContrastColor(team.color);
            teamBtn.style.border = '3px solid #000000';
            teamBtn.style.borderRadius = '10px';
            teamBtn.style.cursor = 'pointer';
            teamBtn.style.transition = 'all 0.3s ease';
            teamBtn.style.textTransform = 'uppercase';
            teamBtn.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
            teamBtn.style.display = 'flex';
            teamBtn.style.flexDirection = 'column';
            teamBtn.style.alignItems = 'center';
            teamBtn.style.justifyContent = 'center';
            teamBtn.style.fontFamily = "'Bebas Neue', sans-serif";
            teamBtn.style.fontWeight = 'bold';
            teamBtn.style.boxSizing = 'border-box';
            
            modalScoreboardButtons.appendChild(teamBtn);
            teamButtons.push(teamBtn);
            
            // Adjust font size if team name is too long
            adjustModalButtonFontSize(teamBtn);
        });
    }
    
    // Create incorrect button with same size as team buttons
    modalIncorrectBtn = document.createElement('button');
    modalIncorrectBtn.type = 'button';
    modalIncorrectBtn.className = 'modal-btn team-btn incorrect-btn';
    modalIncorrectBtn.id = 'modalIncorrectBtn';
    modalIncorrectBtn.textContent = 'Incorrect';
    modalIncorrectBtn.style.boxSizing = 'border-box';
    modalScoreboardButtons.appendChild(modalIncorrectBtn);
    
    // Adjust font size for incorrect button if needed
    adjustModalButtonFontSize(modalIncorrectBtn);
    
    // Create Reveal button and add as first child of modalScoreboardButtons (same row as team buttons)
    const revealBtn = document.createElement('button');
    revealBtn.type = 'button'; // prevent form submit / page reload
    revealBtn.className = 'modal-btn reveal-btn';
    revealBtn.id = 'revealBtn';
    revealBtn.textContent = 'Reveal';
    revealBtn.classList.remove('hidden'); // visible on open; "hidden" class keeps space when answer revealed
    modalScoreboardButtons.insertBefore(revealBtn, modalScoreboardButtons.firstChild);
    adjustModalButtonFontSize(revealBtn);
    
    // Show all buttons immediately
    modalScoreboardButtons.style.display = 'flex';
    
    // When 4 teams, add class so CSS can keep all buttons on one row (slightly smaller scoreboard buttons)
    const modalBottomSection = modalScoreboardButtons.closest('.modal-bottom-section');
    if (modalBottomSection) {
        if (teams.length === 4) {
            modalBottomSection.classList.add('four-teams');
        } else {
            modalBottomSection.classList.remove('four-teams');
        }
    }
    
    // Hide move on initially; keep Undo in layout but invisible so team buttons never shift
    moveOnBtnBottom.style.display = 'none';
    undoBtnBottom.style.display = ''; // ensure not display:none so it keeps space
    undoBtnBottom.classList.add('keeps-space-hidden');
    
    // Flag to track if a selection has been made
    let selectionMade = false;
    let selectedTeam = null; // Track which team was selected (1-indexed, or null for incorrect)
    let answerRevealed = false; // Track if answer has been revealed
    
    // Function to disable all buttons
    const disableAllButtons = () => {
        selectionMade = true;
        teamButtons.forEach(btn => {
            btn.disabled = true;
            btn.style.pointerEvents = 'none';
        });
        if (modalIncorrectBtn) {
            modalIncorrectBtn.disabled = true;
            modalIncorrectBtn.style.pointerEvents = 'none';
        }
    };
    
    // Function to reset selection
    const resetSelection = () => {
        // Reset flags
        selectionMade = false;
        selectedTeam = null;
        
        // Remove selected class from all buttons
        teamButtons.forEach(btn => {
            btn.classList.remove('selected');
            btn.disabled = false;
            btn.style.pointerEvents = 'auto';
        });
        if (modalIncorrectBtn) {
            modalIncorrectBtn.classList.remove('selected');
            modalIncorrectBtn.disabled = false;
            modalIncorrectBtn.style.pointerEvents = 'auto';
        }
        
        // Keep the answer visible on undo - don't hide album cover or answer section
        // Only reset button states, not the answer display
        
        // Keep reveal button hidden on undo since answer is already shown (class keeps space)
        if (revealBtn) revealBtn.classList.add('hidden');
        
        // Hide undo (keeps space so team buttons don't move) and move on
        undoBtnBottom.classList.add('keeps-space-hidden');
        moveOnBtnBottom.style.display = 'none';
    };
    
    modal.classList.add('show');
    
    // Set up Reveal button handler (addEventListener so click is not lost)
    function handleRevealClick(e) {
        e.preventDefault();
        e.stopPropagation();
        if (answerRevealed) return;
        answerRevealed = true;
        stopTimer();
        if (albumCoverElement && albumCoverElement.src) {
            albumCoverElement.style.display = 'block';
            const modalContent = document.querySelector('#modal .modal-content');
            if (modalContent) modalContent.classList.add('with-album-cover');
        }
        const categoryValueContainer = document.querySelector('.category-value-container');
        if (categoryValueContainer) categoryValueContainer.style.display = 'none';
        if (answerRevealSection) {
            answerRevealSection.classList.add('show');
        }
        revealBtn.classList.add('hidden');
    }
    revealBtn.addEventListener('click', handleRevealClick);
    
    // Set up handlers for each team button
    teamButtons.forEach((teamBtn, index) => {
        // Add hover effect
        teamBtn.addEventListener('mouseenter', () => {
            if (!teamBtn.disabled) {
                // Lighten the color slightly on hover
                teamBtn.style.transform = 'scale(1.05)';
                teamBtn.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.4)';
            }
        });
        
        teamBtn.addEventListener('mouseleave', () => {
            if (!teamBtn.disabled) {
                teamBtn.style.transform = 'scale(1)';
                teamBtn.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
            }
        });
        
        teamBtn.onclick = () => {
            // Prevent multiple selections
            if (selectionMade) return;
            
            // Hide the timer
            stopTimer();
            
            // Hide the Reveal button when a team is selected (class keeps space so buttons don't shift)
            revealBtn.classList.add('hidden');
            
            // Show the album cover (if not already shown by Reveal)
            if (albumCoverElement && albumCoverElement.src) {
                albumCoverElement.style.display = 'block';
                const modalContent = document.querySelector('#modal .modal-content');
                if (modalContent) {
                    modalContent.classList.add('with-album-cover');
                }
            }
            
            // Hide the category and dollar amount from the top of the popup
            const categoryValueContainer = document.querySelector('.category-value-container');
            if (categoryValueContainer) {
                categoryValueContainer.style.display = 'none';
            }
            
            // Show the new answer reveal section below the popup
            if (answerRevealSection) {
                answerRevealSection.classList.add('show');
            }
            
            // Play right-answer sound when giving the team a point
            playRightAnswer();
            
            // Add points to the selected team (1-indexed)
            const teamNumber = index + 1;
            addPointsToTeam(teamNumber, value);
            selectedTeam = teamNumber;
            
            // Add selected class to grow the button
            teamBtn.classList.add('selected');
            
            // Disable all buttons
            disableAllButtons();
            
            // Show move on and undo buttons (undo stays in layout, just visible)
            moveOnBtnBottom.style.display = 'block';
            undoBtnBottom.classList.remove('keeps-space-hidden');
        };
    });
    
    // Set up incorrect button handler
    if (modalIncorrectBtn) {
        modalIncorrectBtn.onclick = () => {
            // Prevent multiple selections
            if (selectionMade) return;
            
            // Hide the timer
            stopTimer();
            
            // Hide the Reveal button when Incorrect is selected (class keeps space so buttons don't shift)
            revealBtn.classList.add('hidden');
            
            // Show the album cover
            if (albumCoverElement && albumCoverElement.src) {
                albumCoverElement.style.display = 'block';
                const modalContent = document.querySelector('#modal .modal-content');
                if (modalContent) {
                    modalContent.classList.add('with-album-cover');
                }
            }
            
            // Hide the category and dollar amount from the top of the popup
            const categoryValueContainer = document.querySelector('.category-value-container');
            if (categoryValueContainer) {
                categoryValueContainer.style.display = 'none';
            }
            
            // Show the new answer reveal section below the popup
            if (answerRevealSection) {
                answerRevealSection.classList.add('show');
            }
            
            // Play wrong answer sound (but keep Avicii Levels playing)
            playWrongAnswer();
            
            // Add selected class to grow the button
            modalIncorrectBtn.classList.add('selected');
            selectedTeam = null; // No team selected for incorrect
            
            // Disable all buttons
            disableAllButtons();
            
            // Show move on and undo buttons (undo stays in layout, just visible)
            moveOnBtnBottom.style.display = 'block';
            undoBtnBottom.classList.remove('keeps-space-hidden');
        };
    }
    
    // Set up undo button handler
    undoBtnBottom.onclick = () => {
        // If a team was selected, subtract the points
        if (selectedTeam !== null && selectedTeam >= 1) {
            addPointsToTeam(selectedTeam, -value);
        }
        // addPointsToTeam will handle the scoreboard update with animation
        
        // Reset the selection
        resetSelection();
    };
    
    // Set up move on button handler
    moveOnBtnBottom.onclick = async () => {
        moveOnBtnBottom.style.display = 'none';
        const board = document.getElementById('board');
        const allCells = board ? board.querySelectorAll('.question-cell') : [];
        const disabledCount = board ? Array.from(allCells).filter(c => c.classList.contains('disabled')).length : 0;
        const isLastTile = allCells.length > 0 && (disabledCount + 1) === allCells.length;

        let skipStopMusic = isLastTile;
        if (!isLastTile) {
            // Play cinematic transition sound when Move On is clicked (not on last tile)
            if (transitionAudio) {
                try {
                    transitionAudio.currentTime = 0;
                    transitionAudio.play().catch(() => {});
                } catch (e) {}
            }
            // Fade out music - AWAIT to ensure it completes before we close
            const fadeSucceeded = await fadeOutTileMusic();
            skipStopMusic = fadeSucceeded;
        }

        // Update scoreboard with animation, but only if a team was selected (not incorrect)
        if (selectedTeam !== null && selectedTeam >= 1) {
            incrementCorrectSongsForTeam(selectedTeam);
            updateScoreboard(selectedTeam); // Animate for the selected team
        } else {
            updateScoreboard(); // No animation for incorrect
        }

        // Close modal (tile flips here). Skip immediate stop only if fade already handled it or last tile.
        closeModal({ skipStopMusic, awardedTeam: selectedTeam });
        // Safety: if not last tile, force-stop after a short delay in case fade didn't actually stop playback.
        // playTileMusic clears this timeout when starting a new tile so we never stop the new track.
        if (!isLastTile) {
            if (moveOnSafetyStopTimeout) clearTimeout(moveOnSafetyStopTimeout);
            moveOnSafetyStopTimeout = setTimeout(() => {
                moveOnSafetyStopTimeout = null;
                stopTileMusic();
            }, 600);
        }
    };
    
    // Close modal when clicking outside (but don't award points)
    modal.onclick = (e) => {
        if (e.target === modal) {
            stopTileMusic();
            closeModal({ awardedTeam: selectedTeam });
        }
    };
}

// Close modal
function closeModal(options = {}) {
    const { skipStopMusic = false, finalizeTile = true, awardedTeam = null } = options;
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    
    // Don't stop tile music if we're keeping it for winner screen or fade is handling it
    if (!skipStopMusic && !fadeOutInterval) {
        stopTileMusic();
    }
    
    // Stop the timer
    stopTimer();
    
    // Hide the answer reveal section
    const answerRevealSection = document.getElementById('answerRevealSection');
    if (answerRevealSection) {
        answerRevealSection.classList.remove('show');
    }
    
    // Remove album cover class
    const modalContent = document.querySelector('#modal .modal-content');
    if (modalContent) {
        modalContent.classList.remove('with-album-cover');
    }
    
    // Disable the selected cell BEFORE clearing the reference
    if (finalizeTile && selectedCell) {
        const cellToDisable = selectedCell;
        const valueIndex = parseInt(cellToDisable.dataset.value, 10) || 0;
        const questionValue = dollarValues[valueIndex] || 0;
        lastFinalizedTile = {
            cell: cellToDisable,
            valueIndex,
            questionValue,
            team: awardedTeam
        };
        updateUndoSongButtonState();
        selectedCell.classList.add('disabled');
        selectedCell.textContent = '';
        selectedCell = null;
        // Double-check the cell is disabled
        if (!cellToDisable.classList.contains('disabled')) {
            cellToDisable.classList.add('disabled');
            cellToDisable.textContent = '';
        }
    }

    if (finalizeTile) {
        checkForBoardCompletion();
    }
    
}

// Update scoreboard display
function updateScoreboard(animateTeam = null) {
    // Use dynamic teams if available, otherwise fall back to old system
    if (teams.length > 0) {
        teams.forEach((team, index) => {
            const teamAmountElement = document.getElementById(`teamAmount${index}`);
            if (teamAmountElement) {
                // Remove animation class first
                teamAmountElement.classList.remove('score-update');
                // Update text
                teamAmountElement.textContent = `$${team.score}`;
                // Add animation if this team was animated
                if (animateTeam === (index + 1)) {
                    void teamAmountElement.offsetWidth; // Trigger reflow
                    teamAmountElement.classList.add('score-update');
                }
            }
        });
    } else {
        // Fallback to old system for backwards compatibility
        const teamOneElement = document.getElementById('teamOneScore');
        const teamTwoElement = document.getElementById('teamTwoScore');
        
        if (teamOneElement) {
            teamOneElement.classList.remove('score-update');
            teamOneElement.textContent = `$${teamOneScore}`;
            if (animateTeam === 1) {
                void teamOneElement.offsetWidth;
                teamOneElement.classList.add('score-update');
            }
        }
        if (teamTwoElement) {
            teamTwoElement.classList.remove('score-update');
            teamTwoElement.textContent = `$${teamTwoScore}`;
            if (animateTeam === 2) {
                void teamTwoElement.offsetWidth;
                teamTwoElement.classList.add('score-update');
            }
        }
    }
}

// Add points to a team (without updating scoreboard immediately)
function addPointsToTeam(team, amount) {
    // Use dynamic teams if available (team is 1-indexed)
    if (teams.length > 0 && team >= 1 && team <= teams.length) {
        teams[team - 1].score += amount;
    } else {
        // Fallback to old system
        if (team === 1) {
            teamOneScore += amount;
        } else if (team === 2) {
            teamTwoScore += amount;
        }
    }
    // Don't update scoreboard immediately - will be updated when Move On is clicked
    // Exception: if undoing (negative amount), update immediately without animation
    if (amount < 0) {
        updateScoreboard(); // No animation parameter = no animation
    }
}

function incrementCorrectSongsForTeam(team) {
    if (teams.length > 0 && team >= 1 && team <= teams.length) {
        const currentCount = typeof teams[team - 1].correctSongs === 'number' ? teams[team - 1].correctSongs : 0;
        teams[team - 1].correctSongs = currentCount + 1;
    } else if (team === 1) {
        teamOneCorrectSongs += 1;
    } else if (team === 2) {
        teamTwoCorrectSongs += 1;
    }
}

function decrementCorrectSongsForTeam(team) {
    if (teams.length > 0 && team >= 1 && team <= teams.length) {
        const currentCount = typeof teams[team - 1].correctSongs === 'number' ? teams[team - 1].correctSongs : 0;
        teams[team - 1].correctSongs = Math.max(0, currentCount - 1);
    } else if (team === 1) {
        teamOneCorrectSongs = Math.max(0, teamOneCorrectSongs - 1);
    } else if (team === 2) {
        teamTwoCorrectSongs = Math.max(0, teamTwoCorrectSongs - 1);
    }
}

function undoLastTile() {
    if (!lastFinalizedTile) return;
    const { cell, valueIndex, questionValue, team } = lastFinalizedTile;
    if (!cell || !cell.parentElement) {
        lastFinalizedTile = null;
        return;
    }
    cell.classList.remove('disabled');
    cell.textContent = `$${dollarValues[valueIndex]}`;
    if (team !== null && team !== undefined) {
        addPointsToTeam(team, -questionValue);
        decrementCorrectSongsForTeam(team);
    }
    updateScoreboard();
    const winnerCelebration = document.getElementById('winnerCelebration');
    if (winnerCelebration && winnerCelebration.classList.contains('show')) {
        resetWinnerCelebrationState();
    }
    lastFinalizedTile = null;
    updateUndoSongButtonState();
}

function updateUndoSongButtonState() {
    const btn = document.getElementById('undoSongBtn');
    if (btn) btn.disabled = !lastFinalizedTile;
}

function resetWinnerCelebrationState() {
    const board = document.getElementById('board');
    const winnerCelebration = document.getElementById('winnerCelebration');
    const winnerCelebrationTitle = document.getElementById('winnerCelebrationTitle');
    const winnerCelebrationMessage = document.getElementById('winnerCelebrationMessage');

    if (winnerCelebration && winnerCelebration.classList.contains('show')) {
        fadeOutTileMusic(); // Fade out the last-tile song when leaving the congratulations screen (fire and forget)
    }
    if (board) {
        board.classList.remove('board-faded-out');
    }
    if (winnerCelebration) {
        winnerCelebration.classList.remove('show');
        winnerCelebration.style.display = 'none';
    }
    if (winnerCelebrationTitle) {
        winnerCelebrationTitle.textContent = 'Congratulations!';
    }
    if (winnerCelebrationMessage) {
        winnerCelebrationMessage.textContent = '';
    }
}

function getWinningTeamSummary() {
    if (teams.length > 0) {
        const sortedTeams = teams
            .map((team, index) => ({
                index,
                name: team.name || `Team ${index + 1}`,
                score: typeof team.score === 'number' ? team.score : 0,
                correctSongs: typeof team.correctSongs === 'number' ? team.correctSongs : 0
            }))
            .sort((a, b) => (b.score - a.score) || (b.correctSongs - a.correctSongs) || (a.index - b.index));

        return sortedTeams[0] || { name: 'Team 1', score: 0, correctSongs: 0 };
    }

    if (teamTwoScore > teamOneScore || (teamTwoScore === teamOneScore && teamTwoCorrectSongs > teamOneCorrectSongs)) {
        return { name: 'Team Two', score: teamTwoScore, correctSongs: teamTwoCorrectSongs };
    }

    return { name: 'Team One', score: teamOneScore, correctSongs: teamOneCorrectSongs };
}

function showWinnerCelebration() {
    const board = document.getElementById('board');
    const winnerCelebration = document.getElementById('winnerCelebration');
    const winnerCelebrationTitle = document.getElementById('winnerCelebrationTitle');
    const winnerCelebrationMessage = document.getElementById('winnerCelebrationMessage');

    if (!board || !winnerCelebration || !winnerCelebrationTitle || !winnerCelebrationMessage) return;
    if (winnerCelebration.classList.contains('show')) return;

    const winner = getWinningTeamSummary();
    const correctSongLabel = winner.correctSongs === 1 ? 'correct song' : 'correct songs';

    winnerCelebrationTitle.textContent = `Congratulations ${winner.name}!`;
    winnerCelebrationMessage.textContent = `You won with $${winner.score} and ${winner.correctSongs} ${correctSongLabel} out of ${TOTAL_TRIVIA_TILES}!`;
    board.classList.add('board-faded-out');
    winnerCelebration.style.display = 'flex';
    winnerCelebration.classList.add('show');
}

function checkForBoardCompletion() {
    const board = document.getElementById('board');
    if (!board || board.style.display === 'none') return;

    const allCells = board.querySelectorAll('.question-cell');
    if (!allCells.length) return;

    const allTilesCompleted = Array.from(allCells).every(cell => cell.classList.contains('disabled'));
    if (allTilesCompleted) {
        showWinnerCelebration();
    }
}

// Reset modal functions
function showResetModal() {
    const resetModal = document.getElementById('resetModal');
    resetModal.classList.add('show');
    
    // Close modal when clicking outside
    resetModal.onclick = (e) => {
        if (e.target === resetModal) {
            closeResetModal();
        }
    };
}

function closeResetModal() {
    const resetModal = document.getElementById('resetModal');
    resetModal.classList.remove('show');
}

// Reset this game - keeps same questions but resets score and re-enables all cells
function resetThisGame() {
    if (moveOnSafetyStopTimeout) {
        clearTimeout(moveOnSafetyStopTimeout);
        moveOnSafetyStopTimeout = null;
    }
    lastFinalizedTile = null;
    updateUndoSongButtonState();
    const winnerCelebration = document.getElementById('winnerCelebration');
    const wasWinnerVisible = winnerCelebration && winnerCelebration.classList.contains('show');
    resetWinnerCelebrationState();
    if (!wasWinnerVisible) stopTileMusic();
    
    // Reset team scores
    if (teams.length > 0) {
        teams.forEach(team => {
            team.score = 0;
            team.correctSongs = 0;
        });
    } else {
        teamOneScore = 0;
        teamTwoScore = 0;
        teamOneCorrectSongs = 0;
        teamTwoCorrectSongs = 0;
    }
    updateScoreboard();
    
    // Re-enable all question cells
    const allCells = document.querySelectorAll('.question-cell');
    allCells.forEach(cell => {
        cell.classList.remove('disabled');
        const valueIndex = parseInt(cell.dataset.value);
        cell.textContent = `$${dollarValues[valueIndex]}`;
    });
    
    // Reload music files (Spotify playlists only - no local files)
    if (selectedPlaylistTracks.length > 0) {
        assignTracksToTiles();
    }
    // Don't load local files - we only use Spotify playlists
    // loadTileMusicFiles(); // Disabled - using Spotify playlists only
    
    // Close any open modals
    closeModal({ finalizeTile: false });
    closeResetModal();
}

// Restart with new songs: same categories, reload from Spotify and pick new tracks (no repeats from current board).
async function restartWithNewSongs() {
    if (moveOnSafetyStopTimeout) {
        clearTimeout(moveOnSafetyStopTimeout);
        moveOnSafetyStopTimeout = null;
    }
    lastFinalizedTile = null;
    updateUndoSongButtonState();
    const winnerCelebration = document.getElementById('winnerCelebration');
    const wasWinnerVisible = winnerCelebration && winnerCelebration.classList.contains('show');
    resetWinnerCelebrationState();
    if (!wasWinnerVisible) stopTileMusic();
    closeModal({ finalizeTile: false });
    closeResetModal();
    // Reset team scores
    if (teams.length > 0) {
        teams.forEach(team => {
            team.score = 0;
            team.correctSongs = 0;
        });
    } else {
        teamOneScore = 0;
        teamTwoScore = 0;
        teamOneCorrectSongs = 0;
        teamTwoCorrectSongs = 0;
    }
    updateScoreboard();
    // Collect current track URIs so we don't repeat them
    const excludeTrackIds = new Set();
    if (tileSpotifyTracks && Array.isArray(tileSpotifyTracks)) {
        for (let col = 0; col < tileSpotifyTracks.length; col++) {
            const rows = tileSpotifyTracks[col];
            if (rows && Array.isArray(rows)) {
                for (let row = 0; row < rows.length; row++) {
                    const t = rows[row];
                    if (t && t.uri) excludeTrackIds.add(t.uri);
                }
            }
        }
    }
    if (selectedCategoryPlaylists.length === 6) {
        await loadSelectedCategoryPlaylists({ excludeTrackIds });
    }
}

// Confetti animation for landing page, team selection, team naming, and category selection pages
function createConfetti(x, y) {
    if (isTvSafeMode()) return; // Skip confetti in TV/HDMI mode to reduce load
    // Find which confetti container is currently visible
    let confettiContainer = null;
    const landingConfettiContainer = document.getElementById('confettiContainer');
    const teamSelectionConfettiContainer = document.getElementById('teamSelectionConfettiContainer');
    const teamNamingConfettiContainer = document.getElementById('teamNamingConfettiContainer');
    const categoryConfettiContainer = document.getElementById('categoryConfettiContainer');
    
    // Check which page is visible and use its container
    if (landingConfettiContainer && window.getComputedStyle(landingConfettiContainer.parentElement).display !== 'none') {
        confettiContainer = landingConfettiContainer;
    } else if (teamSelectionConfettiContainer && window.getComputedStyle(teamSelectionConfettiContainer.parentElement).display !== 'none') {
        confettiContainer = teamSelectionConfettiContainer;
    } else if (teamNamingConfettiContainer && window.getComputedStyle(teamNamingConfettiContainer.parentElement).display !== 'none') {
        confettiContainer = teamNamingConfettiContainer;
    } else if (categoryConfettiContainer && window.getComputedStyle(categoryConfettiContainer.parentElement).display !== 'none') {
        confettiContainer = categoryConfettiContainer;
    }
    
    if (!confettiContainer) {
        return; // No visible container, silently return
    }
    
    const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#95e1d3', '#f38181', '#aa96da', '#fcbad3', '#ffd3a5'];
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Random color
        const color = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.background = color;
        
        // Random position around mouse
        const offsetX = (Math.random() - 0.5) * 100;
        const offsetY = (Math.random() - 0.5) * 100;
        confetti.style.left = (x + offsetX) + 'px';
        confetti.style.top = (y + offsetY) + 'px';
        confetti.style.position = 'absolute';
        
        // Random drift and duration
        const drift = (Math.random() - 0.5) * 200;
        const duration = 2 + Math.random() * 2; // 2-4 seconds
        
        confetti.style.setProperty('--drift', drift + 'px');
        confetti.style.animation = `confetti-fall ${duration}s linear forwards`;
        confetti.style.animationDelay = (Math.random() * 0.2) + 's';
        
        // Random size
        const size = 8 + Math.random() * 8;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        confettiContainer.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, (duration + 0.2) * 1000);
    }
}

// Event listeners
// Team selection and naming functions
function initializeTeamSelection() {
    const teamCountButtons = document.querySelectorAll('.team-count-btn');
    teamCountButtons.forEach(button => {
        button.addEventListener('click', () => {
            const teamCount = parseInt(button.dataset.teamCount);
            numberOfTeams = teamCount;
            
            // Hide team selection page and show team naming page
            // Navigate to team naming page using history
            if (window.navigateToPage) {
                window.navigateToPage('team-naming');
                initializeTeamNaming();
            }
        });
    });
}

// Helper function to get contrasting text color (black or white) based on background
function getContrastColor(hexColor) {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // Return black for light colors, white for dark colors
    return luminance > 0.5 ? '#000000' : '#ffffff';
}

function initializeTeamNaming() {
    const container = document.getElementById('teamInputsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Eight random colors for dropdowns
    const colors = [
        { name: 'Red', value: '#ff0000' },
        { name: 'Blue', value: '#0000ff' },
        { name: 'Green', value: '#00ff00' },
        { name: 'Yellow', value: '#ffff00' },
        { name: 'Purple', value: '#800080' },
        { name: 'Orange', value: '#ffa500' },
        { name: 'Pink', value: '#ffc0cb' },
        { name: 'Cyan', value: '#00ffff' }
    ];
    
    // Create input and dropdown for each team
    for (let i = 0; i < numberOfTeams; i++) {
        const teamDiv = document.createElement('div');
        teamDiv.className = 'team-input-row';
        
        const label = document.createElement('label');
        label.textContent = `Team ${i + 1}:`;
        label.className = 'team-label';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Enter team ${i + 1} name`;
        input.className = 'team-name-input';
        input.dataset.teamIndex = i;
        input.maxLength = 20; // Limit to 20 characters
        
        // Create hidden select for form functionality
        const colorSelect = document.createElement('select');
        colorSelect.className = 'team-color-select';
        colorSelect.dataset.teamIndex = i;
        colorSelect.style.display = 'none';
        
        // Add default option
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Select color';
        defaultOption.selected = true;
        colorSelect.appendChild(defaultOption);
        
        // Add color options
        colors.forEach(color => {
            const option = document.createElement('option');
            option.value = color.value;
            colorSelect.appendChild(option);
        });
        
        // Create custom dropdown wrapper
        const dropdownWrapper = document.createElement('div');
        dropdownWrapper.className = 'team-color-dropdown';
        
        // Create custom dropdown button (displays selected color)
        const dropdownButton = document.createElement('div');
        dropdownButton.className = 'team-color-button';
        dropdownButton.textContent = 'Select color';
        dropdownButton.style.backgroundColor = '#ffffff';
        dropdownButton.style.color = '#000000';
        
        // Create custom dropdown options container
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'team-color-options';
        
        // Create custom color option divs
        colors.forEach(color => {
            const colorOption = document.createElement('div');
            colorOption.className = 'team-color-option';
            colorOption.style.backgroundColor = color.value;
            colorOption.dataset.value = color.value;
            
            // Click handler for color option
            colorOption.addEventListener('click', (e) => {
                const selectedColor = e.target.dataset.value;
                colorSelect.value = selectedColor;
                
                // Update button appearance
                dropdownButton.style.backgroundColor = selectedColor;
                dropdownButton.style.color = getContrastColor(selectedColor);
                dropdownButton.textContent = ' ';
                
                // Close dropdown
                dropdownWrapper.classList.remove('open');
                
                // Trigger change event on hidden select
                colorSelect.dispatchEvent(new Event('change'));
                checkTeamNamingComplete();
            });
            
            optionsContainer.appendChild(colorOption);
        });
        
        // Toggle dropdown on button click with smart positioning
        dropdownButton.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpening = !dropdownWrapper.classList.contains('open');
            
            if (isOpening) {
                // Calculate if dropdown should open above or below
                const buttonRect = dropdownButton.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const dropdownHeight = optionsContainer.scrollHeight || (8 * 50); // Approximate: 8 options × ~50px each
                const spaceBelow = viewportHeight - buttonRect.bottom;
                const spaceAbove = buttonRect.top;
                
                // If not enough space below but enough above, open upward
                if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
                    optionsContainer.style.bottom = '100%';
                    optionsContainer.style.top = 'auto';
                    optionsContainer.style.borderTop = '3px solid #000000';
                    optionsContainer.style.borderBottom = 'none';
                    optionsContainer.style.borderRadius = '8px 8px 0 0';
                } else {
                    // Default: open below
                    optionsContainer.style.top = '100%';
                    optionsContainer.style.bottom = 'auto';
                    optionsContainer.style.borderBottom = '3px solid #000000';
                    optionsContainer.style.borderTop = 'none';
                    optionsContainer.style.borderRadius = '0 0 8px 8px';
                }
            }
            
            dropdownWrapper.classList.toggle('open');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdownWrapper.contains(e.target)) {
                dropdownWrapper.classList.remove('open');
            }
        });
        
        // Update select background color when option is selected (for change event)
        colorSelect.addEventListener('change', (e) => {
            const selectedColor = e.target.value;
            if (selectedColor) {
                dropdownButton.style.backgroundColor = selectedColor;
                dropdownButton.style.color = getContrastColor(selectedColor);
                dropdownButton.textContent = ' ';
            } else {
                dropdownButton.style.backgroundColor = '#ffffff';
                dropdownButton.style.color = '#000000';
                dropdownButton.textContent = 'Select color';
            }
            checkTeamNamingComplete();
        });
        
        dropdownWrapper.appendChild(colorSelect);
        dropdownWrapper.appendChild(dropdownButton);
        dropdownWrapper.appendChild(optionsContainer);
        
        teamDiv.appendChild(label);
        teamDiv.appendChild(input);
        teamDiv.appendChild(dropdownWrapper);
        container.appendChild(teamDiv);
        
        // Add change listener for input
        input.addEventListener('input', checkTeamNamingComplete);
    }
    
    // Initialize teams array
    teams = [];
    for (let i = 0; i < numberOfTeams; i++) {
        teams.push({ name: '', color: '', score: 0, correctSongs: 0 });
    }
    
    checkTeamNamingComplete();
}

function checkTeamNamingComplete() {
    const inputs = document.querySelectorAll('.team-name-input');
    const selects = document.querySelectorAll('.team-color-select');
    const continueBtn = document.getElementById('teamNamingContinueBtn');
    
    let allComplete = true;
    
    inputs.forEach((input, index) => {
        const name = input.value.trim();
        const color = selects[index].value;
        
        teams[index] = {
            name: name,
            color: color,
            score: 0,
            correctSongs: 0
        };
        
        if (!name || !color) {
            allComplete = false;
        }
    });
    
    if (continueBtn) {
        continueBtn.disabled = !allComplete;
    }
}

function handleTeamNamingContinue() {
    const continueBtn = document.getElementById('teamNamingContinueBtn');
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            // Save team data
            const inputs = document.querySelectorAll('.team-name-input');
            const selects = document.querySelectorAll('.team-color-select');
            
            teams = [];
            for (let i = 0; i < numberOfTeams; i++) {
                teams.push({
                    name: inputs[i].value.trim(),
                    color: selects[i].value,
                    score: 0,
                    correctSongs: 0
                });
            }
            
            // Update scoreboard
            updateScoreboardDisplay();
            
            // Navigate to category selection
            // Navigate to category selection page using history
            if (window.navigateToPage) {
                window.navigateToPage('category-selection');
                resumeBackgroundMusic();
                initializeCategorySelection();
            }
        });
    }
}

function updateScoreboardDisplay() {
    const scoreboard = document.querySelector('.scoreboard');
    if (!scoreboard) return;
    
    scoreboard.innerHTML = '';
    
    teams.forEach((team, index) => {
        const teamScoreDiv = document.createElement('div');
        teamScoreDiv.className = 'team-score';
        teamScoreDiv.style.backgroundColor = team.color;
        teamScoreDiv.id = `teamScore${index}`;
        
        const teamLabel = document.createElement('div');
        teamLabel.className = 'team-label';
        teamLabel.textContent = team.name;
        teamLabel.title = team.name; // Show full name on hover if truncated
        
        const teamAmount = document.createElement('div');
        teamAmount.className = 'team-amount';
        teamAmount.id = `teamAmount${index}`;
        teamAmount.textContent = '$0';
        
        teamScoreDiv.appendChild(teamLabel);
        teamScoreDiv.appendChild(teamAmount);
        scoreboard.appendChild(teamScoreDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('[Karaoke Party] App ready');
    setConnectPageStatus('');

    // Spotify login buttons first — must work even if later init throws.
    ['connectSpotifyLoginBtn', 'landingSpotifyLoginBtn', 'spotifyLoginBtn'].forEach((id) => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.type = 'button';
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                startSpotifyLogin();
            });
        }
    });

    // Fullscreen toggle - top right on every page; stays fullscreen until clicked again
    const fullscreenToggle = document.getElementById('fullscreenToggle');
    if (fullscreenToggle) {
        function updateFullscreenButton() {
            const isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement);
            fullscreenToggle.classList.toggle('is-fullscreen', isFullscreen);
            fullscreenToggle.setAttribute('aria-label', isFullscreen ? 'Exit full screen' : 'Toggle full screen');
            fullscreenToggle.title = isFullscreen ? 'Exit full screen' : 'Toggle full screen';
        }
        fullscreenToggle.addEventListener('click', () => {
            const isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement);
            if (isFullscreen) {
                if (document.exitFullscreen) document.exitFullscreen();
                else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
            } else {
                const el = document.documentElement;
                if (el.requestFullscreen) el.requestFullscreen();
                else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
            }
        });
        document.addEventListener('fullscreenchange', updateFullscreenButton);
        document.addEventListener('webkitfullscreenchange', updateFullscreenButton);
        updateFullscreenButton();
    }

    // Honor ?tv=1 in URL to enable TV/HDMI safe mode (e.g. when opening on a TV)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('tv') === '1') {
        setTvSafeMode(true);
    }

    // Ensure game header shows correct text (force update in case of cache issues)
    const gameHeader = document.getElementById('gameHeader');
    if (gameHeader) {
        gameHeader.textContent = 'KARAOKE PARTY!';
    }
    
    // Browser history management for single-page navigation
    const pageHistory = ['connect']; // Track page history stack
    const allPages = {
        'connect': 'connectPage',
        'landing': 'landingPage',
        'team-selection': 'teamSelectionPage',
        'team-naming': 'teamNamingPage',
        'category-selection': 'categorySelectionPage',
        'game': 'gameContainer'
    };
    
    // Function to navigate to a page and add to history (make globally accessible)
    window.navigateToPage = function(pageId) {
        // Hide all pages
        Object.values(allPages).forEach(pageElementId => {
            const page = document.getElementById(pageElementId);
            if (page) page.style.display = 'none';
        });
        
        // Show target page
        const targetPageId = allPages[pageId];
        if (targetPageId) {
            const targetPage = document.getElementById(targetPageId);
            if (targetPage) {
                // All pages use flex display (gameContainer needs flex for proper board layout)
                targetPage.style.display = 'flex';
            }
        }
        
        // Add to history stack
        pageHistory.push(pageId);
        
        // Push state to browser history (always push, even if same page)
        window.history.pushState({ page: pageId }, '', `#${pageId}`);
        
        // Update Spotify UI to show/hide disconnect button based on current page
        updateSpotifyUI();
        if (pageId !== 'game') {
            if (moveOnSafetyStopTimeout) {
                clearTimeout(moveOnSafetyStopTimeout);
                moveOnSafetyStopTimeout = null;
            }
            resetWinnerCelebrationState();
        }

        // Connect and landing pages should be silent (do not play Boogie Wonderland here)
        if (pageId === 'connect' || pageId === 'landing') {
            stopBackgroundMusic();
        }
        // When landing on KARAOKE PARTY! page with Spotify connected, start landing playlist (retries + gesture fallback)
        if (pageId === 'landing' && spotifyReady && spotifyDeviceId) {
            startLandingPlaybackAfterConnect();
        }
        // Refresh Categories button: enable only on category-selection when logged in to Spotify
        const refreshCategoriesBtn = document.getElementById('refreshCategoriesBtn');
        if (refreshCategoriesBtn && pageId === 'category-selection') {
            refreshCategoriesBtn.disabled = !spotifyAccessToken;
        }
    };
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
        // Get page ID from state or from URL hash
        let pageId = null;
        if (e.state && e.state.page) {
            pageId = e.state.page;
        } else if (window.location.hash) {
            // Fallback to hash if state is missing
            pageId = window.location.hash.substring(1); // Remove #
        }
        
        // If no page ID found, default to connect
        if (!pageId || !allPages[pageId]) {
            pageId = 'connect';
        }
        
        // Hide all pages
        Object.values(allPages).forEach(pId => {
            const page = document.getElementById(pId);
            if (page) page.style.display = 'none';
        });
        
        // Show the page from history
        const targetPageId = allPages[pageId];
        if (targetPageId) {
            const targetPage = document.getElementById(targetPageId);
            if (targetPage) {
                // All pages use flex display (gameContainer needs flex for proper board layout)
                targetPage.style.display = 'flex';
            }
        }
        
        // Update history stack (trim to current position)
        const index = pageHistory.indexOf(pageId);
        if (index > -1) {
            pageHistory.splice(index + 1); // Remove everything after this page
        } else {
            pageHistory.push(pageId); // Add if not in history
        }
        
        // Update Spotify UI to show/hide disconnect button based on current page
        updateSpotifyUI();
        if (pageId !== 'game') {
            if (moveOnSafetyStopTimeout) {
                clearTimeout(moveOnSafetyStopTimeout);
                moveOnSafetyStopTimeout = null;
            }
            resetWinnerCelebrationState();
        }

        // Connect and landing pages should be silent (do not play Boogie Wonderland here)
        if (pageId === 'connect' || pageId === 'landing') {
            stopBackgroundMusic();
        }
        // When landing on KARAOKE PARTY! page with Spotify connected, start landing playlist (retries + gesture fallback)
        if (pageId === 'landing' && spotifyReady && spotifyDeviceId) {
            startLandingPlaybackAfterConnect();
        }
        if (pageId === 'category-selection') {
            const refreshCategoriesBtn = document.getElementById('refreshCategoriesBtn');
            if (refreshCategoriesBtn) refreshCategoriesBtn.disabled = !spotifyAccessToken;
        }
    });
    
    // Initialize with connect page
    window.history.replaceState({ page: 'connect' }, '', '#connect');
    
    // Initialize background music (optional; file may not exist). Don't set src on load
    // so the landing page never requests a missing file (avoids console ERR_FILE_NOT_FOUND).
    // src is set in resumeBackgroundMusic() when we first need to play.
    backgroundMusic = new Audio();
    backgroundMusic.volume = 0.5;
    backgroundMusic.loop = true;
    backgroundMusic.addEventListener('error', () => {
        backgroundMusic = null;
    });
    
    const landingPage = document.getElementById('landingPage');
    const categorySelectionPage = document.getElementById('categorySelectionPage');
    
    // Confetti animation for landing page only
    let lastConfettiTime = 0;
    
    // Landing page click: confetti + retry landing playlist if autoplay was blocked after login
    if (landingPage) {
        landingPage.addEventListener('click', (e) => {
            createConfetti(e.clientX, e.clientY);
            if (landingPlaybackStartPending && spotifyReady && spotifyDeviceId) {
                startLandingPlaybackAfterConnect();
            }
        }, { once: false }); // Allow multiple clicks
    }
    
    // Continuous falling confetti for team selection, team naming, and category selection pages
    // This runs continuously across all three pages without restarting
    let fallingConfettiInterval = null;
    
    function getActiveFallingConfettiContainer() {
        // Check which page is visible and return its container (not game page)
        const teamSelectionPage = document.getElementById('teamSelectionPage');
        const teamNamingPage = document.getElementById('teamNamingPage');
        const categorySelectionPage = document.getElementById('categorySelectionPage');
        
        if (teamSelectionPage) {
            const style = window.getComputedStyle(teamSelectionPage);
            if (style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0') {
                return document.getElementById('teamSelectionConfettiContainer');
            }
        }
        
        if (teamNamingPage) {
            const style = window.getComputedStyle(teamNamingPage);
            if (style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0') {
                return document.getElementById('teamNamingConfettiContainer');
            }
        }
        
        if (categorySelectionPage) {
            const style = window.getComputedStyle(categorySelectionPage);
            if (style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0') {
                return document.getElementById('categoryConfettiContainer');
            }
        }
        
        return null; // None of the pages are visible
    }
    
    function startFallingConfetti() {
        if (isTvSafeMode()) return; // Avoid heavy animation when using TV/HDMI
        // Don't restart if already running - just let it continue
        if (fallingConfettiInterval) {
            return;
        }

        // Create confetti falling from the top every 200ms
        // This checks which page is visible and uses the appropriate container
        fallingConfettiInterval = setInterval(() => {
            const container = getActiveFallingConfettiContainer();
            
            if (container) {
                createFallingConfetti(container);
            }
            // Don't stop the interval - it will continue checking and creating confetti
            // when any of the three pages becomes visible
        }, 200);
    }
    
    function stopFallingConfetti() {
        if (fallingConfettiInterval) {
            clearInterval(fallingConfettiInterval);
            fallingConfettiInterval = null;
        }
    }
    
    // Function to create confetti falling from the top
    function createFallingConfetti(container) {
        const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#95e1d3', '#f38181', '#aa96da', '#fcbad3', '#ffd3a5'];
        
        // Create 3-5 confetti pieces at random positions across the top
        const count = 3 + Math.floor(Math.random() * 3);
        
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            // Random color
            const color = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.background = color;
            
            // Random position across the top of the screen
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-20px';
            confetti.style.position = 'absolute';
            
            // Random drift and duration
            const drift = (Math.random() - 0.5) * 300; // More horizontal drift
            const duration = 3 + Math.random() * 2; // 3-5 seconds to fall
            
            confetti.style.setProperty('--drift', drift + 'px');
            confetti.style.animation = `confetti-fall ${duration}s linear forwards`;
            
            // Random size
            const size = 8 + Math.random() * 8;
            confetti.style.width = size + 'px';
            confetti.style.height = size + 'px';
            
            container.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, (duration + 0.2) * 1000);
        }
    }
    
    // Use document mousemove for confetti animation on landing page only
    document.addEventListener('mousemove', (e) => {
        // Check which page is visible
        const landingStyle = landingPage ? window.getComputedStyle(landingPage) : { display: 'none' };
        
        const isLandingVisible = landingStyle.display !== 'none' && landingStyle.visibility !== 'hidden' && landingStyle.opacity !== '0';
        
        // Create confetti on landing page only (other pages use falling confetti)
        if (isLandingVisible) {
            const now = Date.now();
            // Throttle confetti creation to every 150ms to avoid too many particles
            if (now - lastConfettiTime > 150) {
                lastConfettiTime = now;
                createConfetti(e.clientX, e.clientY);
            }
        }
    });
    
    // Monitor pages (team selection, team naming, category selection) for falling confetti
    // Start the animation once when any page becomes visible, keep it running across all
    function setupContinuousFallingConfetti() {
        const teamSelectionPage = document.getElementById('teamSelectionPage');
        const teamNamingPage = document.getElementById('teamNamingPage');
        const categorySelectionPage = document.getElementById('categorySelectionPage');
        
        // Check if ANY of the pages are visible (not game page)
        function isAnyPageVisible() {
            const pages = [teamSelectionPage, teamNamingPage, categorySelectionPage];
            return pages.some(page => {
                if (!page) return false;
                const style = window.getComputedStyle(page);
                return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
            });
        }
        
        // Function to check if animation should be running
        // Use a debounce to avoid race conditions during rapid page transitions
        let checkTimeout = null;
        let stopTimeout = null;
        const checkAndUpdateFallingConfetti = () => {
            // Debounce to avoid checking during rapid transitions
            if (checkTimeout) {
                clearTimeout(checkTimeout);
            }
            checkTimeout = setTimeout(() => {
                const shouldBeVisible = isAnyPageVisible();
                
                if (shouldBeVisible && !fallingConfettiInterval) {
                    // At least one page is visible and animation isn't running - start it
                    startFallingConfetti();
                } else if (!shouldBeVisible && fallingConfettiInterval) {
                    // Clear any pending stop timeout
                    if (stopTimeout) {
                        clearTimeout(stopTimeout);
                        stopTimeout = null;
                    }
                    // Only stop after a delay, giving time for page transitions to complete
                    stopTimeout = setTimeout(() => {
                        // Double-check that no pages are visible before stopping
                        if (!isAnyPageVisible() && fallingConfettiInterval) {
                            stopFallingConfetti();
                        }
                        stopTimeout = null;
                    }, 200); // Longer delay to ensure transition is complete
                } else if (shouldBeVisible && fallingConfettiInterval) {
                    // Cancel any pending stop if a page becomes visible
                    if (stopTimeout) {
                        clearTimeout(stopTimeout);
                        stopTimeout = null;
                    }
                }
            }, 10); // Small delay to let both hide/show operations complete
        };
        
        // Create observers for pages with confetti (not game page)
        const pages = [teamSelectionPage, teamNamingPage, categorySelectionPage].filter(p => p !== null);
        
        pages.forEach(pageElement => {
            const observer = new MutationObserver(checkAndUpdateFallingConfetti);
            
            // Observe style changes
            observer.observe(pageElement, {
                attributes: true,
                attributeFilter: ['style', 'class']
            });
        });
        
        // Check initial state
        checkAndUpdateFallingConfetti();
    }
    
    // Setup continuous falling confetti for team selection, team naming, and category selection pages
    setupContinuousFallingConfetti();
    
    // Back button event listeners
    const teamSelectionBackBtn = document.getElementById('teamSelectionBackBtn');
    const teamNamingBackBtn = document.getElementById('teamNamingBackBtn');
    const categorySelectionBackBtn = document.getElementById('categorySelectionBackBtn');
    const gameBackBtn = document.getElementById('gameBackBtn');
    
    if (teamSelectionBackBtn) {
        teamSelectionBackBtn.addEventListener('click', () => {
            window.navigateToPage('landing');
        });
    }
    
    if (teamNamingBackBtn) {
        teamNamingBackBtn.addEventListener('click', () => {
            window.navigateToPage('team-selection');
        });
    }
    
    if (categorySelectionBackBtn) {
        categorySelectionBackBtn.addEventListener('click', () => {
            window.navigateToPage('team-naming');
        });
    }

    const refreshCategoriesBtn = document.getElementById('refreshCategoriesBtn');
    if (refreshCategoriesBtn) {
        refreshCategoriesBtn.addEventListener('click', () => {
            refreshCategoriesFromSpotify();
        });
    }
    
    if (gameBackBtn) {
        gameBackBtn.addEventListener('click', () => {
            window.navigateToPage('category-selection');
        });
    }
    
    const resetBtn = document.getElementById('resetBtn');
    const undoSongBtn = document.getElementById('undoSongBtn');
    const resetThisGameBtn = document.getElementById('resetThisGameBtn');
    const restartWithNewSongsBtn = document.getElementById('restartWithNewSongsBtn');
    const chooseNewCategoriesBtn = document.getElementById('chooseNewCategoriesBtn');
    const homePageBtn = document.getElementById('homePageBtn');
    const cancelResetBtn = document.getElementById('cancelResetBtn');
    
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            showResetModal();
        });
    }

    if (undoSongBtn) {
        undoSongBtn.addEventListener('click', () => {
            undoLastTile();
        });
        updateUndoSongButtonState();
    }
    
    if (resetThisGameBtn) {
        resetThisGameBtn.addEventListener('click', () => {
            resetThisGame();
        });
    }
    
    if (restartWithNewSongsBtn) {
        restartWithNewSongsBtn.addEventListener('click', () => {
            restartWithNewSongs();
        });
    }
    
    if (chooseNewCategoriesBtn) {
        chooseNewCategoriesBtn.addEventListener('click', () => {
            closeResetModal();
            window.navigateToPage('category-selection');
        });
    }
    
    if (homePageBtn) {
        homePageBtn.addEventListener('click', () => {
            closeResetModal();
            window.navigateToPage('landing');
        });
    }
    
    if (cancelResetBtn) {
        cancelResetBtn.addEventListener('click', () => {
            closeResetModal();
        });
    }
    
    // Set up non-game header clicks to return to landing page
    document.addEventListener('click', (e) => {
        // Keep the game board header non-clickable; only other setup-page headers return home
        const categorySelectionHeader = e.target.closest('#categorySelectionHeader');
        const teamSelectionHeader = e.target.closest('#teamSelectionHeader');
        const teamNamingHeader = e.target.closest('#teamNamingHeader');
        
        if (categorySelectionHeader || teamSelectionHeader || teamNamingHeader) {
            e.preventDefault();
            e.stopPropagation();
            
            // Stop any playing music
            stopTileMusic();
            
            // Hide all pages
            const gameContainer = document.getElementById('gameContainer');
            const categorySelectionPage = document.getElementById('categorySelectionPage');
            const teamSelectionPage = document.getElementById('teamSelectionPage');
            const teamNamingPage = document.getElementById('teamNamingPage');
            const landingPage = document.getElementById('landingPage');
            
            // Navigate back to landing page using history
            if (window.navigateToPage) {
                window.navigateToPage('landing');
                // Ensure landing page is silent
                stopBackgroundMusic();
            }
        }
    });
    
    const spotifyLogoutBtn = document.getElementById('spotifyLogoutBtn');
    
    if (spotifyLogoutBtn) {
        spotifyLogoutBtn.addEventListener('click', () => {
            clearSpotifyTokens();
            spotifyDevicePrimed = false;
            landingPlaybackStartPending = false;
            clearLandingPlaybackGestureFallback();
            if (spotifyPlayer) {
                spotifyPlayer.disconnect();
            }
            spotifyPlayer = null;
            spotifyDeviceId = null;
            spotifyReady = false;
            updateSpotifyUI();
        });
    }
    
    // Set up disconnect button (top right, appears when connected)
    const spotifyDisconnectBtn = document.getElementById('spotifyDisconnectBtn');
    if (spotifyDisconnectBtn) {
        spotifyDisconnectBtn.addEventListener('click', () => {
            clearSpotifyTokens();
            spotifyDevicePrimed = false;
            landingPlaybackStartPending = false;
            clearLandingPlaybackGestureFallback();
            if (spotifyPlayer) {
                spotifyPlayer.disconnect();
            }
            spotifyPlayer = null;
            spotifyDeviceId = null;
            spotifyReady = false;
            updateSpotifyUI();
        });
    }
    
    // Set up connect page Continue button (after connecting → go to landing)
    const connectContinueBtn = document.getElementById('connectContinueBtn');
    if (connectContinueBtn) {
        connectContinueBtn.addEventListener('click', () => {
            if (window.navigateToPage) window.navigateToPage('landing');
        });
    }
    
    // Set up connect page "Continue without connecting" (skip → go to landing)
    const connectSkipBtn = document.getElementById('connectSkipBtn');
    if (connectSkipBtn) {
        connectSkipBtn.addEventListener('click', () => {
            if (window.navigateToPage) window.navigateToPage('landing');
        });
    }
    
    // Set up Continue button (from landing page to category selection)
    const continueBtn = document.getElementById('continueBtn');
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            if (window.navigateToPage) {
                window.navigateToPage('team-selection');
            }
        });
    }
    
    // Set up "Continue without connecting" button (from landing page to team selection)
    const skipConnectBtn = document.getElementById('skipConnectBtn');
    if (skipConnectBtn) {
        skipConnectBtn.addEventListener('click', () => {
            if (window.navigateToPage) {
                window.navigateToPage('team-selection');
            }
        });
    }
    
    // Set up Category Continue button (from category selection to game)
    const categoryContinueBtn = document.getElementById('categoryContinueBtn');
    if (categoryContinueBtn) {
        categoryContinueBtn.addEventListener('click', async () => {
            if (selectedCategoryPlaylists.length === 6) {
                const categorySelectionPage = document.getElementById('categorySelectionPage');
                const gameContainer = document.getElementById('gameContainer');
                const loadingSpinner = document.getElementById('loadingSpinner');
                const board = document.getElementById('board');
                
                // Navigate to game page using history (keep landing playlist playing until board is visible)
                if (window.navigateToPage) {
                    window.navigateToPage('game');
                    // Do NOT fade here - fade 2s after board has loaded (see finally block below)
                    
                    // Show loading spinner and hide board
                    if (loadingSpinner) {
                        loadingSpinner.classList.remove('hidden');
                    }
                    if (board) {
                        board.style.display = 'none';
                    }
                    
                    // Load tracks for selected playlists and initialize game
                    console.log('About to load tracks. Current state:', {
                        selectedPlaylists: selectedCategoryPlaylists.length,
                        selectedNames: selectedCategoryNames.length,
                        names: selectedCategoryNames
                    });
                    
                    try {
                        await loadSelectedCategoryPlaylists();
                        
                        console.log('After loadSelectedCategoryPlaylists. State:', {
                            selectedPlaylists: selectedCategoryPlaylists.length,
                            selectedNames: selectedCategoryNames.length,
                            names: selectedCategoryNames,
                            categoryPlaylists: categoryPlaylists.length
                        });
                        
                        // Initialize game with loaded playlists
                        initGame();
                    } catch (error) {
                        console.error('Error loading selected category playlists:', error);
                        alert('Error loading playlists. Please try again.');
                    } finally {
                        // Always hide loading spinner and show board, even if there was an error
                        if (loadingSpinner) {
                            loadingSpinner.classList.add('hidden');
                        }
                        if (board) {
                            board.style.display = 'grid';
                        }
                        // Ensure the board is fit after it becomes visible
                        setTimeout(() => {
                            fitBoardToViewport();
                        }, 50);
                        // Fade out landing playlist 2 seconds after the board is visible
                        cancelPendingLandingSpotifyFade();
                        landingSpotifyFadeOutTimeout = setTimeout(() => {
                            landingSpotifyFadeOutTimeout = null;
                            fadeOutSpotifyPlayback();
                            fadeOutBackgroundMusic();
                        }, 2000);
                    }
                }
            }
        });
    }
    
    // Start with connect page visible; landing and game hidden until user continues
    const connectPage = document.getElementById('connectPage');
    const gameContainer = document.getElementById('gameContainer');
    loadSpotifyTokensFromStorage();
    
    if (connectPage) connectPage.style.display = 'flex';
    if (landingPage) landingPage.style.display = 'none';
    if (gameContainer) gameContainer.style.display = 'none';
    
    updateSpotifyUI();
    
    // Handle Spotify callback if returning from auth (may navigate to landing if just connected)
    handleSpotifyCallback();
    
    // Load the audio files
    loadAudioFiles();
    
    // Only initialize game if not coming from category selection
    // (initGame will be called by loadSelectedCategoryPlaylists if playlists are selected)
    // Initialize team selection
    initializeTeamSelection();
    
    // Initialize team naming continue button
    handleTeamNamingContinue();
    
    // Don't initialize game on page load - wait for user to select categories/playlists
    // The game will be initialized when the user clicks Continue after selecting playlists
    // console.log('Page loaded - waiting for team and category selection before initializing game'); // Disabled - too verbose
    
    // Initialize audio context on first user interaction (required by browsers)
    document.addEventListener('click', () => {
        initAudioContext();
    }, { once: true });

    // When tab is hidden, suspend Web Audio and stop waveform to reduce HDMI load (can prevent TV from turning off)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (waveformAnimationId) {
                cancelAnimationFrame(waveformAnimationId);
                waveformAnimationId = null;
            }
            if (audioContext && audioContext.state === 'running') {
                audioContext.suspend().catch(() => {});
            }
        } else {
            if (audioContext && audioContext.state === 'suspended') {
                audioContext.resume().catch(() => {});
            }
            if (spotifyAccessToken) {
                ensureValidSpotifyAccessToken().catch(() => {});
            }
        }
    });

    // Expose playlist-by-popularity helper for console (e.g. showPlaylistByPopularity('7wdYvn9s0RJtNZzKiEcJxg'))
    window.showPlaylistByPopularity = showPlaylistByPopularity;
    // Expose artist-popularity-per-playlist helper (e.g. showArtistPopularityInPlaylist() or showArtistPopularityInPlaylist('playlistId'))
    window.showArtistPopularityInPlaylist = showArtistPopularityInPlaylist;
});

// Listen for window resize to re-adjust question cell font sizes
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        fitBoardToViewport();
        const allCells = document.querySelectorAll('.question-cell');
        allCells.forEach(cell => adjustQuestionCellFontSize(cell));
    }, 100);
});

// Keyboard support for closing modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close modals
        const modal = document.getElementById('modal');
        const resetModal = document.getElementById('resetModal');
        
        if (modal.classList.contains('show')) {
            closeModal();
        } else if (resetModal.classList.contains('show')) {
            closeResetModal();
        }
    }
});

console.log('[Karaoke Party] script.js loaded');
