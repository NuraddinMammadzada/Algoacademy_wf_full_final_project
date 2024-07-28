const mongoose = require('mongoose');
const Video = require('./models/Video'); // Adjust the path to your Video model

mongoose.connect('mongodb://localhost:27017/videos', { useNewUrlParser: true, useUnifiedTopology: true });

const exampleVideos = [
    { title: 'Video 1', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', description: 'Description of Video 1', likes: 0, comments: [] },
    { title: 'Video 2', url: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ', description: 'Description of Video 2', likes: 0, comments: [] },
    { title: 'Video 3', url: 'https://www.youtube.com/watch?v=7wtfhZwyrcc', description: 'Description of Video 3', likes: 0, comments: [] },
    { title: 'Video 4', url: 'https://www.youtube.com/watch?v=4N5HnoSkk0g', description: 'Description of Video 4', likes: 0, comments: [] },
    { title: 'Video 5', url: 'https://www.youtube.com/watch?v=3AtDnEC4zak', description: 'Description of Video 5', likes: 0, comments: [] },
    { title: 'Video 6', url: 'https://www.youtube.com/watch?v=HgWmC5Tg_YQ', description: 'Description of Video 6', likes: 0, comments: [] },
    { title: 'Video 7', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', description: 'Description of Video 7', likes: 0, comments: [] },
    { title: 'Video 8', url: 'https://www.youtube.com/watch?v=Lp7S2CF8-jw', description: 'Description of Video 8', likes: 0, comments: [] },
    { title: 'Video 9', url: 'https://www.youtube.com/watch?v=9v8Q-K0uhcA', description: 'Description of Video 9', likes: 0, comments: [] },
    { title: 'Video 10', url: 'https://www.youtube.com/watch?v=XsX2v11Qp2Q', description: 'Description of Video 10', likes: 0, comments: [] },
    { title: 'Video 11', url: 'https://www.youtube.com/watch?v=8QKnWS7n2s8', description: 'Description of Video 11', likes: 0, comments: [] },
    { title: 'Video 12', url: 'https://www.youtube.com/watch?v=XMJ-jb9pf2g', description: 'Description of Video 12', likes: 0, comments: [] },
    { title: 'Video 13', url: 'https://www.youtube.com/watch?v=Km8xkjGzD5E', description: 'Description of Video 13', likes: 0, comments: [] },
    { title: 'Video 14', url: 'https://www.youtube.com/watch?v=US-X9kdT06Y', description: 'Description of Video 14', likes: 0, comments: [] },
    { title: 'Video 15', url: 'https://www.youtube.com/watch?v=j5-yKhDd64s', description: 'Description of Video 15', likes: 0, comments: [] },
    { title: 'Video 16', url: 'https://www.youtube.com/watch?v=7Q2dGogIu0k', description: 'Description of Video 16', likes: 0, comments: [] },
    { title: 'Video 17', url: 'https://www.youtube.com/watch?v=lk2rD-yF6r0', description: 'Description of Video 17', likes: 0, comments: [] },
    { title: 'Video 18', url: 'https://www.youtube.com/watch?v=H8f9bDStGm0', description: 'Description of Video 18', likes: 0, comments: [] },
    { title: 'Video 19', url: 'https://www.youtube.com/watch?v=ZGdEp3m8j8M', description: 'Description of Video 19', likes: 0, comments: [] },
    { title: 'Video 20', url: 'https://www.youtube.com/watch?v=HoCwN1bM6CI', description: 'Description of Video 20', likes: 0, comments: [] },
    { title: 'Video 21', url: 'https://www.youtube.com/watch?v=wiKYSk3NISQ', description: 'Description of Video 21', likes: 0, comments: [] },
    { title: 'Video 22', url: 'https://www.youtube.com/watch?v=5_PpXyLdk18', description: 'Description of Video 22', likes: 0, comments: [] },
    { title: 'Video 23', url: 'https://www.youtube.com/watch?v=mZ6Yo5G_wxw', description: 'Description of Video 23', likes: 0, comments: [] },
    { title: 'Video 24', url: 'https://www.youtube.com/watch?v=fk-Q1yb4vW4', description: 'Description of Video 24', likes: 0, comments: [] },
    { title: 'Video 25', url: 'https://www.youtube.com/watch?v=0Z_DV4OGGFo', description: 'Description of Video 25', likes: 0, comments: [] },
    { title: 'Video 26', url: 'https://www.youtube.com/watch?v=qO_5C2ujAek', description: 'Description of Video 26', likes: 0, comments: [] },
    { title: 'Video 27', url: 'https://www.youtube.com/watch?v=bI7JUV9IBd8', description: 'Description of Video 27', likes: 0, comments: [] },
    { title: 'Video 28', url: 'https://www.youtube.com/watch?v=1M_SZTlBL8A', description: 'Description of Video 28', likes: 0, comments: [] },
    { title: 'Video 29', url: 'https://www.youtube.com/watch?v=1IpyEfdVbyo', description: 'Description of Video 29', likes: 0, comments: [] },
    { title: 'Video 30', url: 'https://www.youtube.com/watch?v=pwoRck_FdoY', description: 'Description of Video 30', likes: 0, comments: [] },
    { title: 'Video 31', url: 'https://www.youtube.com/watch?v=UzwvU8F-Tso', description: 'Description of Video 31', likes: 0, comments: [] },
    { title: 'Video 32', url: 'https://www.youtube.com/watch?v=lUlCFB9Jbbo', description: 'Description of Video 32', likes: 0, comments: [] },
    { title: 'Video 33', url: 'https://www.youtube.com/watch?v=y9RoMbKJY1g', description: 'Description of Video 33', likes: 0, comments: [] },
    { title: 'Video 34', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', description: 'Description of Video 34', likes: 0, comments: [] },
    { title: 'Video 35', url: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ', description: 'Description of Video 35', likes: 0, comments: [] },
    { title: 'Video 36', url: 'https://www.youtube.com/watch?v=7wtfhZwyrcc', description: 'Description of Video 36', likes: 0, comments: [] },
    { title: 'Video 37', url: 'https://www.youtube.com/watch?v=4N5HnoSkk0g', description: 'Description of Video 37', likes: 0, comments: [] },
    { title: 'Video 38', url: 'https://www.youtube.com/watch?v=3AtDnEC4zak', description: 'Description of Video 38', likes: 0, comments: [] },
    { title: 'Video 39', url: 'https://www.youtube.com/watch?v=HgWmC5Tg_YQ', description: 'Description of Video 39', likes: 0, comments: [] },
    { title: 'Video 40', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', description: 'Description of Video 40', likes: 0, comments: [] },
    { title: 'Video 41', url: 'https://www.youtube.com/watch?v=Lp7S2CF8-jw', description: 'Description of Video 41', likes: 0, comments: [] },
    { title: 'Video 42', url: 'https://www.youtube.com/watch?v=9v8Q-K0uhcA', description: 'Description of Video 42', likes: 0, comments: [] },
    { title: 'Video 43', url: 'https://www.youtube.com/watch?v=XsX2v11Qp2Q', description: 'Description of Video 43', likes: 0, comments: [] },
    { title: 'Video 44', url: 'https://www.youtube.com/watch?v=8QKnWS7n2s8', description: 'Description of Video 44', likes: 0, comments: [] },
    { title: 'Video 45', url: 'https://www.youtube.com/watch?v=XMJ-jb9pf2g', description: 'Description of Video 45', likes: 0, comments: [] }
];

mongoose.connect('mongodb://localhost:27017/videos', { useNewUrlParser: true, useUnifiedTopology: true });

const seedDatabase = async () => {
    try {
        await Video.deleteMany({}); // Clear the collection
        await Video.insertMany(exampleVideos); // Insert example videos
        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.disconnect(); // Close the connection
    }
};

seedDatabase();
