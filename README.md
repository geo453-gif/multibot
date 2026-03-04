# MultiBot - Multipurpose Discord Bot with Dashboard

A feature-rich Discord bot with **1,000+ dynamic commands** and a beautiful real-time web dashboard for monitoring and management.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Discord.js](https://img.shields.io/badge/discord.js-14.14.0-purple.svg)

## ✨ Features

- **1,000+ Dynamic Commands** - Automatically generated commands across 17 categories
- **Beautiful Web Dashboard** - Real-time monitoring and command browser
- **Live Statistics** - Track commands executed, users served, bot latency, and more
- **Category Organization** - Commands organized by: utility, fun, moderation, info, economy, music, games, images, admin, roleplay, math, conversion, weather, search, quote, todo, reminders
- **Search & Filter** - Find commands quickly with search and category filtering
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Real-time Updates** - Dashboard updates every 5 seconds
- **Slash Commands** - Modern Discord slash command support
- **Easy to Extend** - Simple command structure for adding custom commands

## 📊 Dashboard Features

- **Statistics Overview**
  - Total commands count
  - Active users served
  - Commands executed
  - Bot latency monitoring
  
- **Bot Status**
  - Real-time status indicator
  - Uptime tracking
  - Guild count
  - Message processing stats

- **Command Browser**
  - Search across all commands
  - Filter by category
  - View command descriptions
  - Category statistics

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn
- Discord bot token
- Discord application/bot set up on Discord Developer Portal

### Installation

1. **Clone or extract the project:**
```bash
cd multibot
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure environment variables:**
```bash
cp .env.example .env
```

4. **Edit `.env` file with your credentials:**
```
DISCORD_TOKEN=your_bot_token_here
CLIENT_ID=your_client_id_here
GUILD_ID=your_guild_id_here (optional, for faster testing)
PORT=3000
```

### Getting Your Discord Credentials

1. **Discord Token:**
   - Go to [Discord Developer Portal](https://discord.com/developers/applications)
   - Create a New Application
   - Go to "Bot" section and click "Add Bot"
   - Copy the token under USERNAME

2. **Client ID:**
   - In the same application, go to "General Information"
   - Copy the Application ID (this is your CLIENT_ID)

3. **Guild ID (optional):**
   - Right-click a Discord server
   - Click "Copy Server ID" (requires Developer Mode enabled)
   - This is optional but speeds up command registration

### Running the Bot

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

### Accessing the Dashboard

Once the bot is running:
- **Dashboard URL:** `http://localhost:3000`
- The dashboard will auto-update every 5 seconds
- View real-time statistics and browse all commands

## 📂 Project Structure

```
multibot/
├── bot.js                 # Main bot file with command handling
├── package.json           # Dependencies
├── .env.example          # Environment variables template
├── README.md             # This file
└── public/
    └── index.html        # Dashboard UI
```

## 🎮 Using the Bot

### Slash Commands

Type `/` in Discord to see all available commands. Examples:

- `/ping` - Check bot latency
- `/help` - View all command categories
- `/stats` - View bot statistics
- `/dashboard` - Get dashboard link
- `/utility1` through `/utility65` - Utility commands
- `/fun1` through `/fun65` - Fun commands
- ... and 900+ more across all categories

### Dashboard

1. Open `http://localhost:3000` in your browser
2. View real-time statistics
3. Search for specific commands
4. Filter by category to find what you need
5. Monitor bot performance metrics

## 🛠️ Customization

### Adding Custom Commands

Edit `bot.js` and add to the `specialCommands` array:

```javascript
{
  name: 'yourcommand',
  description: 'Your command description',
  category: 'utility',
  execute: async (interaction) => {
    await interaction.reply('Your response here');
  }
}
```

### Modifying Dashboard

Edit `public/index.html` or `dashboard.jsx` to customize:
- Colors and themes
- Layout and styling
- Information displayed
- Chart types and metrics

### Adding More Categories

Modify the `categories` array in `bot.js`:

```javascript
const categories = [
  'your-new-category',
  // ... existing categories
];
```

## 📊 API Endpoints

The bot exposes REST API endpoints for the dashboard:

- `GET /api/stats` - Get bot statistics
- `GET /api/commands` - Get all commands
- `GET /api/commands/category/:category` - Get commands by category

## 🔐 Security Considerations

- Never commit `.env` file to version control
- Keep your Discord token secure
- Use environment variables for sensitive data
- Implement rate limiting for production
- Add authentication to dashboard for public deployment

## 📈 Scaling

For larger deployments:

1. **Database Integration** - Store stats in MongoDB/PostgreSQL
2. **Multi-process** - Use clustering for handling more guilds
3. **Caching** - Implement Redis for command caching
4. **Authentication** - Add OAuth2 for dashboard access
5. **Load Balancing** - Distribute across multiple bot instances

## 🐛 Troubleshooting

### Bot not responding to commands
- Verify bot has message content intent enabled
- Check if bot has proper permissions in the server
- Ensure slash commands are registered: check Discord application for "Apps" section

### Dashboard not updating
- Verify Express server is running on port 3000
- Check browser console for API errors
- Ensure CORS is properly configured

### Commands not registering
- Wait a few minutes for Discord to register slash commands
- Try using `/` to refresh command list
- Check bot console for registration errors

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions welcome! Feel free to:
- Add more commands
- Improve the dashboard
- Optimize performance
- Fix bugs
- Add new features

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review the code comments
3. Check Discord.js documentation
4. File an issue with details

## 🎯 Roadmap

- [ ] Database integration
- [ ] User authentication
- [ ] Advanced analytics
- [ ] Command scheduling
- [ ] Custom command builder
- [ ] Music commands
- [ ] Moderation tools
- [ ] Economy system

## 📚 Resources

- [Discord.js Documentation](https://discord.js.org/)
- [Discord Developer Portal](https://discord.com/developers)
- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/)

---

Made with ❤️ for the Discord community

**MultiBot © 2024**
