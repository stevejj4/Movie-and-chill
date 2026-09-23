# 🎬 Movie and Chill

> **Discover. Share. Watch. Chill.**

**Movie and Chill** is a social movie discovery and recommendation platform designed to help people discover movies, share them with friends, discuss what they watch, and receive personalized recommendations based on their interests, viewing behavior, ratings, reviews, and social interactions.

The platform combines **social movie discovery** with a **machine learning recommendation system** that learns from user feedback over time.

---

## 🚀 Overview

Finding a movie to watch is easy. Finding something that **you and your friends will actually enjoy** is harder.

Movie and Chill addresses this by combining:

* 🎬 Movie discovery
* 👥 Friends and social interactions
* ⭐ Ratings and reviews
* 💬 Movie discussions
* 📋 Watchlists
* 👀 Watch history
* 🤝 Friend-based recommendations
* 🧠 Machine learning recommendations
* 💭 NLP analysis of written feedback
* 👨‍👩‍👧‍👦 Group movie recommendations

The goal is to create a recommendation system that becomes more personalized as users interact with the platform.

---

# ✨ Core Features

## 🎬 Movie Discovery

Users can:

* Search for movies
* Browse popular movies
* Explore genres
* View movie details
* See cast and crew
* View ratings
* Read reviews
* Discover similar movies

Movie metadata is provided through the **TMDB API**.

---

## 👥 Social Movie Sharing

Users can connect with friends and share movies they think others might enjoy.

A typical interaction:

```text
Stephen shares a movie
        ↓
Friend receives the movie
        ↓
Friend watches it
        ↓
Friend rates the movie
        ↓
Friend writes feedback
        ↓
Movie and Chill learns from the interaction
```

This creates a social layer around movie discovery rather than treating recommendations as an isolated algorithm.

---

## ⭐ Ratings

Users can rate movies after watching them.

Example:

```text
Movie: Interstellar

Stephen
★★★★★
5/5
```

Ratings become an important signal for the recommendation engine.

---

## 💬 Reviews & Feedback

Users can provide written feedback about movies.

For example:

> "The cinematography was amazing, but the pacing was a little slow."

This information can eventually be processed by the NLP component of the recommendation system.

Instead of only learning:

```text
Rating = 3/5
```

the system can potentially learn:

```text
Visuals       → Positive
Story         → Positive
Pacing        → Negative
Acting        → Positive
```

This provides richer information about user preferences.

---

## ❤️ Social Interactions

The system can capture interactions such as:

* Likes
* Comments
* Shares
* Movie recommendations from friends
* Movies viewed from a friend's activity
* Watchlist additions

These interactions can become additional recommendation signals.

---

# 🧠 Machine Learning Recommendation System

The core technical component of Movie and Chill is the recommendation engine.

The system will progressively evolve from a simple recommendation model into a hybrid recommendation system.

## Phase 1 — Content-Based Recommendation

The first recommendation model will use movie metadata.

Features may include:

* Genres
* Overview
* Keywords
* Cast
* Director
* Production information

Text features can initially be represented using **TF-IDF**.

```text
Movie Metadata
      ↓
Text preprocessing
      ↓
TF-IDF vectors
      ↓
Cosine similarity
      ↓
Similar movies
```

For example:

```text
User watches:

Interstellar

        ↓

System analyzes:
Sci-Fi
Drama
Space
Science
Christopher Nolan
Time
Exploration

        ↓

Finds similar movies
```

---

# 🤝 Phase 2 — Collaborative Filtering

Once enough users have interacted with movies, Movie and Chill can learn from user behavior.

Example:

```text
             Movie A   Movie B   Movie C   Movie D
User 1          5         4         ?         ?
User 2          5         5         4         ?
User 3          ?         5         4         5
User 4          2         1         2         1
```

The system can identify patterns between users and movies.

This allows recommendations such as:

> "Users with similar movie preferences enjoyed this movie."

---

# 🔀 Phase 3 — Hybrid Recommendation

The long-term recommendation engine will combine multiple sources of information.

```text
                 ┌──────────────────┐
                 │ Movie Metadata   │
                 └────────┬─────────┘
                          │
                 Content-Based Model
                          │
                          ▼
User Data ───────► Hybrid Engine ◄────── Ratings
                          ▲
                          │
                    Social Signals
                          │
                          ▲
                     NLP Feedback
                          │
                          ▲
                    Watch History
```

Potential recommendation signals include:

* Movie similarity
* User ratings
* Watch history
* Genre preferences
* Review sentiment
* Review topics
* Friends' activity
* Likes
* Shares
* Watchlist behavior

---

# 💭 NLP & Written Feedback

Later versions of Movie and Chill will use NLP models to understand written reviews.

Example:

```text
Review:

"The acting was incredible and the visuals were
beautiful, although the story felt predictable."
```

The NLP system could extract:

```text
Acting       → Positive
Visuals      → Positive
Story        → Negative
```

These signals can then contribute to the recommendation profile.

The NLP layer will initially explore models and libraries from the **Hugging Face Transformers ecosystem**.

---

# 👨‍👩‍👧‍👦 Group Recommendations

Movie and Chill is designed to support recommendations for groups of friends.

For example:

```text
               Group
                 │
       ┌─────────┼─────────┐
       ▼         ▼         ▼
     User A    User B    User C
       │         │         │
       ▼         ▼         ▼
   Preferences Preferences Preferences
       │         │         │
       └─────────┼─────────┘
                 ▼
        Group Recommendation
                 │
                 ▼
           Movie Suggestions
```

The system can identify movies that align with the group's combined preferences.

---

# 🔄 Recommendation Feedback Loop

Movie and Chill is designed around continuous learning.

```text
              User discovers movie
                       ↓
                  Watches movie
                       ↓
                Rates / Reviews
                       ↓
                User interaction
                       ↓
              Data collection
                       ↓
              Feature engineering
                       ↓
              Recommendation model
                       ↓
             Personalized results
                       ↓
                 User interacts
                       ↓
                  More data
                       ↓
                Better learning
```

The system will store interactions rather than retraining a model after every individual action. Models can be periodically retrained or updated as sufficient new data becomes available.

---

# 🏗️ System Architecture

```text
                         ┌───────────────┐
                         │     Users     │
                         └───────┬───────┘
                                 │
                                 ▼
                    ┌────────────────────────┐
                    │  Next.js + TypeScript  │
                    │      Web Application    │
                    └────────────┬───────────┘
                                 │
                ┌────────────────┼────────────────┐
                │                │                │
                ▼                ▼                ▼
        Firebase Auth       Firestore           TMDB
                │                │                │
                │                │                │
                └────────────────┼────────────────┘
                                 │
                                 ▼
                      User Interaction Data
                                 │
                 ┌───────────────┼───────────────┐
                 │               │               │
                 ▼               ▼               ▼
              Ratings         Reviews       Watch History
                 │               │               │
                 └───────────────┼───────────────┘
                                 ▼
                     Python ML Recommendation
                                 │
                         ┌───────┴────────┐
                         │                │
                         ▼                ▼
                 Recommendation        NLP
                     Models           Analysis
                         │                │
                         └───────┬────────┘
                                 ▼
                            FastAPI
                                 │
                                 ▼
                            Next.js
                                 │
                                 ▼
                              User
```

---

# 🛠️ Technology Stack

## Frontend / Application

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**

Next.js is used as the main web application framework.

The project can reuse and migrate components from the existing React frontend rather than rebuilding the interface from scratch.

---

## Authentication

**Firebase Authentication**

Used for:

* User registration
* Login
* Authentication state
* Account management

---

## Database

**Cloud Firestore**

Used to store application and interaction data.

Potential collections include:

```text
users
movies
ratings
reviews
comments
likes
friendships
watch_history
watchlists
recommendations
groups
group_members
feedback_events
```

Firestore is particularly useful for the social and real-time aspects of the application.

---

## Movie Data

**TMDB API**

Used for movie metadata such as:

* Titles
* Posters
* Backdrops
* Genres
* Overviews
* Release dates
* Cast
* Crew
* Popularity
* Movie identifiers

Movie and Chill will respect the applicable TMDB API terms and attribution requirements.

---

# 🤖 Machine Learning Stack

The ML component is intentionally separated from the main web application.

### Development

* Python
* Jupyter Notebook
* VS Code

### Data Processing

* Pandas
* NumPy

### Machine Learning

* scikit-learn

### NLP

* Hugging Face Transformers

### ML API

* FastAPI

The separation allows the recommendation engine to evolve independently from the web application.

---

# 🔌 Application ↔ ML Communication

The Next.js application communicates with the Python ML service through HTTP APIs.

Example:

```text
Next.js
   │
   │ GET /recommendations/{userId}
   ▼
FastAPI
   │
   ▼
Recommendation Engine
   │
   ▼
Firestore / Model
   │
   ▼
Recommended Movies
   │
   ▼
Next.js
```

Example response:

```json
{
  "recommendations": [
    {
      "movieId": 550,
      "score": 0.94
    },
    {
      "movieId": 27205,
      "score": 0.89
    }
  ]
}
```

---

# 🔐 Security

The application will implement:

* Firebase Authentication
* Firestore Security Rules
* Protected application routes
* Server-side validation where appropriate
* API authentication between application services
* Environment variables for secrets
* Least-privilege access
* Input validation
* Secure handling of user-generated content

Sensitive credentials such as TMDB API keys and Firebase service credentials will never be committed to GitHub.

---

# 📊 Data Model

A simplified conceptual model:

```text
User
 │
 ├── Ratings
 │
 ├── Reviews
 │
 ├── Watch History
 │
 ├── Watchlist
 │
 ├── Friends
 │
 ├── Likes
 │
 └── Recommendations
          │
          ▼
        Movie
```

Social relationships:

```text
User ─────── Friend ─────── User
  │
  └──────── Shares Movie
                    │
                    ▼
                  Movie
```

Group relationships:

```text
Group
 │
 ├── User A
 ├── User B
 └── User C
        │
        ▼
Group Preferences
        │
        ▼
Group Recommendations
```

---

# 📁 Project Structure

The project will eventually be organized into two major applications.

```text
movie-and-chill/
│
├── web/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── hooks/
│   ├── types/
│   └── public/
│
├── ml/
│   ├── app/
│   │   ├── api/
│   │   ├── models/
│   │   ├── services/
│   │   ├── nlp/
│   │   └── data/
│   │
│   ├── notebooks/
│   ├── training/
│   ├── tests/
│   ├── requirements.txt
│   └── Dockerfile
│
├── README.md
└── .gitignore
```

---

# 🖥️ Planned Application Pages

```text
/
├── Discover
├── Movies
│   └── /movies/[id]
├── Feed
├── Friends
├── Groups
├── Recommendations
├── Watchlist
└── Profile
```

---

# 🗺️ Development Roadmap

## Phase 1 — Foundation

* [ ] Set up Next.js + TypeScript
* [ ] Migrate existing React frontend
* [ ] Configure Tailwind CSS
* [ ] Configure Firebase
* [ ] Implement authentication
* [ ] Establish Firestore structure

## Phase 2 — Movie Discovery

* [ ] Integrate TMDB API
* [ ] Movie search
* [ ] Popular movies
* [ ] Genre discovery
* [ ] Movie details
* [ ] Similar movies
* [ ] Movie cards and grids

## Phase 3 — Social Features

* [ ] User profiles
* [ ] Friend system
* [ ] Movie sharing
* [ ] Activity feed
* [ ] Likes
* [ ] Comments
* [ ] Ratings
* [ ] Reviews

## Phase 4 — Personalization

* [ ] Watch history
* [ ] Watchlist
* [ ] Interaction tracking
* [ ] User preference profiles
* [ ] Recommendation API

## Phase 5 — Machine Learning

* [ ] Collect recommendation dataset
* [ ] Data preprocessing
* [ ] Exploratory data analysis
* [ ] Content-based model
* [ ] Collaborative filtering
* [ ] Hybrid recommendation model
* [ ] Model evaluation
* [ ] FastAPI integration

## Phase 6 — NLP

* [ ] Review preprocessing
* [ ] Sentiment analysis
* [ ] Aspect extraction
* [ ] Transformer experiments
* [ ] Integrate NLP signals into recommendations

## Phase 7 — Group Recommendations

* [ ] Create groups
* [ ] Group membership
* [ ] Group preferences
* [ ] Group recommendation algorithm
* [ ] Group movie discussions

---

# 🧪 Machine Learning Evaluation

The recommendation engine will not be evaluated simply because it "produces recommendations."

Different approaches will be compared using appropriate recommendation metrics.

Potential metrics include:

* Precision@K
* Recall@K
* F1@K
* Mean Average Precision (MAP)
* Normalized Discounted Cumulative Gain (NDCG)
* RMSE / MAE where applicable to rating prediction

The project will also investigate how additional signals affect recommendation quality.

For example:

```text
Ratings only
     ↓
Baseline

Ratings + Movie Metadata
     ↓
Model 2

Ratings + Metadata + Watch History
     ↓
Model 3

Ratings + Metadata + Watch History
+ Social Interactions + Reviews
     ↓
Hybrid Model
```

---

# 🔬 Research Direction

One of the central research questions for Movie and Chill is:

> **Can combining explicit ratings, written feedback, viewing behavior, movie metadata, and social interactions improve personalized movie recommendations compared with simpler recommendation approaches?**

This allows the project to explore both **software engineering** and **artificial intelligence**.

---

# 🌱 Future Possibilities

Future versions may explore:

* Semantic movie search
* Movie embeddings
* Vector similarity
* More advanced collaborative filtering
* Deep learning recommendation models
* Transformer-based review analysis
* Explainable recommendations
* Personalized recommendation explanations
* Group decision-making algorithms
* Context-aware recommendations
* Mood-based movie discovery

For example:

> **"Why am I seeing this movie?"**

The system could eventually explain:

```text
Recommended because:

✓ You frequently watch Sci-Fi
✓ You rated similar movies highly
✓ You enjoyed movies by this director
✓ Two of your friends liked this movie
✓ Your recent reviews show a preference for strong visual storytelling
```

---

# ☁️ Deployment

The initial deployment architecture can use:

```text
Next.js
   ↓
Vercel

Firebase
   ↓
Authentication + Firestore

FastAPI
   ↓
Cloud Run / Render

TMDB
   ↓
Movie Metadata
```

The architecture is intentionally kept simple during the initial development phase.

Additional infrastructure will only be introduced when actual requirements justify it.

---

# 🎯 Project Goals

Movie and Chill aims to demonstrate how modern web development and machine learning can work together to build a genuinely useful social application.

The project combines:

**Software Engineering**

```text
Requirements
     ↓
System Design
     ↓
Development
     ↓
Testing
     ↓
Deployment
     ↓
Iteration
```

with:

**Artificial Intelligence**

```text
Data
 ↓
Feature Engineering
 ↓
Model Training
 ↓
Evaluation
 ↓
Recommendations
 ↓
User Feedback
 ↓
Improvement
```

---

# 👨‍💻 Development Philosophy

Movie and Chill will be developed incrementally.

The project will prioritize:

* Simple architecture
* Maintainable code
* Meaningful user interactions
* Data quality
* Reproducible ML experiments
* Explainable recommendations
* Secure application design
* Measurable model performance

The recommendation system will evolve as real interaction data becomes available rather than introducing unnecessary ML complexity before the data exists.

---

# 📌 Current Architecture

```text
┌───────────────────────────────────────────┐
│          MOVIE AND CHILL                  │
│                                           │
│  Next.js + TypeScript + Tailwind CSS      │
└─────────────────────┬─────────────────────┘
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
 Firebase Authentication      Firestore
                                  │
                                  ▼
                           User Interactions
                                  │
                    ┌─────────────┼─────────────┐
                    ▼             ▼             ▼
                 Ratings       Reviews      Watch History
                    │             │             │
                    └─────────────┼─────────────┘
                                  ▼
                         Python ML Engine
                                  │
                    ┌─────────────┴─────────────┐
                    ▼                           ▼
             Recommendation                 NLP
                 Models                    Analysis
                    │                           │
                    └─────────────┬─────────────┘
                                  ▼
                              FastAPI
                                  │
                                  ▼
                              Next.js
```

---

# 📜 License

This project is currently under development.

License information will be added as the project matures.

---

## 🎬 Movie and Chill

**Discover. Share. Watch. Chill.**

*A social movie platform powered by personalized recommendations.*
