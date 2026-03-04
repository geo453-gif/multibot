// ============ ADVANCED COMMAND EXAMPLES ============
// Add these to bot.js or import them as modules

const advancedCommands = [
  // ========== UTILITY COMMANDS ==========
  {
    name: 'avatar',
    description: 'Get a user\'s avatar image',
    category: 'utility',
    execute: async (interaction) => {
      const user = interaction.options?.getUser('user') || interaction.user;
      await interaction.reply({
        embeds: [{
          title: `${user.username}'s Avatar`,
          image: { url: user.displayAvatarURL({ size: 512 }) },
          color: 0x5865F2
        }]
      });
    }
  },

  {
    name: 'userinfo',
    description: 'Get detailed information about a user',
    category: 'info',
    execute: async (interaction) => {
      const user = interaction.options?.getUser('user') || interaction.user;
      const member = await interaction.guild?.members.fetch(user.id);
      
      await interaction.reply({
        embeds: [{
          title: 'User Information',
          fields: [
            { name: 'Username', value: user.username, inline: true },
            { name: 'ID', value: user.id, inline: true },
            { name: 'Account Created', value: new Date(user.createdTimestamp).toLocaleDateString(), inline: true },
            { name: 'Bot', value: user.bot ? 'Yes' : 'No', inline: true },
            { name: 'Joined Server', value: member?.joinedAt?.toLocaleDateString() || 'N/A', inline: true },
            { name: 'Role Count', value: String(member?.roles.cache.size || 0), inline: true }
          ],
          thumbnail: { url: user.displayAvatarURL() },
          color: 0x5865F2
        }]
      });
    }
  },

  {
    name: 'serverinfo',
    description: 'Get information about the current server',
    category: 'info',
    execute: async (interaction) => {
      const guild = interaction.guild;
      
      await interaction.reply({
        embeds: [{
          title: `${guild.name} Information`,
          fields: [
            { name: 'Server ID', value: guild.id, inline: true },
            { name: 'Members', value: String(guild.memberCount), inline: true },
            { name: 'Channels', value: String(guild.channels.cache.size), inline: true },
            { name: 'Roles', value: String(guild.roles.cache.size), inline: true },
            { name: 'Created', value: new Date(guild.createdTimestamp).toLocaleDateString(), inline: true },
            { name: 'Owner', value: `<@${guild.ownerId}>`, inline: true }
          ],
          thumbnail: { url: guild.iconURL() },
          color: 0x00FF00
        }]
      });
    }
  },

  // ========== FUN COMMANDS ==========
  {
    name: 'dice',
    description: 'Roll a dice (1-6)',
    category: 'fun',
    execute: async (interaction) => {
      const roll = Math.floor(Math.random() * 6) + 1;
      const emojis = ['🎲', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣'];
      
      await interaction.reply({
        content: `${emojis[0]} You rolled: ${emojis[roll]}`
      });
    }
  },

  {
    name: 'coinflip',
    description: 'Flip a coin (heads or tails)',
    category: 'fun',
    execute: async (interaction) => {
      const result = Math.random() > 0.5 ? 'Heads' : 'Tails';
      await interaction.reply({
        content: `🪙 **${result}!**`
      });
    }
  },

  {
    name: 'rps',
    description: 'Rock Paper Scissors - Play against the bot',
    category: 'games',
    execute: async (interaction) => {
      const choices = ['rock', 'paper', 'scissors'];
      const botChoice = choices[Math.floor(Math.random() * choices.length)];
      const userChoice = choices[Math.floor(Math.random() * choices.length)];
      
      let result;
      if (userChoice === botChoice) {
        result = "It's a tie!";
      } else if (
        (userChoice === 'rock' && botChoice === 'scissors') ||
        (userChoice === 'paper' && botChoice === 'rock') ||
        (userChoice === 'scissors' && botChoice === 'paper')
      ) {
        result = 'You won! 🎉';
      } else {
        result = 'Bot won! 🤖';
      }
      
      await interaction.reply({
        content: `You chose: **${userChoice}**\nBot chose: **${botChoice}**\n\n${result}`
      });
    }
  },

  {
    name: 'fortune',
    description: 'Get a random fortune',
    category: 'fun',
    execute: async (interaction) => {
      const fortunes = [
        '🔮 You will have great success today!',
        '🔮 A pleasant surprise is waiting for you.',
        '🔮 Your kindness will be rewarded.',
        '🔮 An exciting opportunity is approaching.',
        '🔮 Good things come to those who wait.',
        '🔮 You are destined for greatness!',
        '🔮 Today is your lucky day!',
        '🔮 Adventure awaits you soon.'
      ];
      
      const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      await interaction.reply(fortune);
    }
  },

  // ========== MATH COMMANDS ==========
  {
    name: 'add',
    description: 'Add two numbers',
    category: 'math',
    execute: async (interaction) => {
      const a = interaction.options?.getNumber('first') || 5;
      const b = interaction.options?.getNumber('second') || 3;
      const result = a + b;
      
      await interaction.reply(`${a} + ${b} = **${result}**`);
    }
  },

  {
    name: 'multiply',
    description: 'Multiply two numbers',
    category: 'math',
    execute: async (interaction) => {
      const a = interaction.options?.getNumber('first') || 4;
      const b = interaction.options?.getNumber('second') || 5;
      const result = a * b;
      
      await interaction.reply(`${a} × ${b} = **${result}**`);
    }
  },

  // ========== CONVERSION COMMANDS ==========
  {
    name: 'celsius_to_fahrenheit',
    description: 'Convert Celsius to Fahrenheit',
    category: 'conversion',
    execute: async (interaction) => {
      const celsius = interaction.options?.getNumber('celsius') || 0;
      const fahrenheit = (celsius * 9/5) + 32;
      
      await interaction.reply(`${celsius}°C = **${fahrenheit.toFixed(2)}°F**`);
    }
  },

  {
    name: 'km_to_miles',
    description: 'Convert kilometers to miles',
    category: 'conversion',
    execute: async (interaction) => {
      const km = interaction.options?.getNumber('kilometers') || 10;
      const miles = km * 0.621371;
      
      await interaction.reply(`${km}km = **${miles.toFixed(2)} miles**`);
    }
  },

  // ========== ADMIN COMMANDS ==========
  {
    name: 'clear',
    description: 'Clear messages from a channel (Mod only)',
    category: 'admin',
    execute: async (interaction) => {
      if (!interaction.member.permissions.has('ManageMessages')) {
        return await interaction.reply({
          content: '❌ You need permission to manage messages!',
          ephemeral: true
        });
      }
      
      const count = interaction.options?.getInteger('count') || 10;
      try {
        await interaction.channel.bulkDelete(Math.min(count, 100));
        await interaction.reply(`✅ Cleared ${count} messages!`);
      } catch (error) {
        await interaction.reply('❌ Error clearing messages!');
      }
    }
  },

  // ========== ROLEPLAY COMMANDS ==========
  {
    name: 'hug',
    description: 'Give someone a hug',
    category: 'roleplay',
    execute: async (interaction) => {
      const user = interaction.options?.getUser('user');
      const content = user 
        ? `${interaction.user.username} hugs ${user.username}! 🤗`
        : `${interaction.user.username} hugs everyone! 🤗`;
      
      await interaction.reply(content);
    }
  },

  {
    name: 'high_five',
    description: 'High five someone',
    category: 'roleplay',
    execute: async (interaction) => {
      const user = interaction.options?.getUser('user');
      const content = user 
        ? `${interaction.user.username} high-fives ${user.username}! ✋`
        : `${interaction.user.username} high-fives the air! ✋`;
      
      await interaction.reply(content);
    }
  },

  // ========== TODO COMMANDS ==========
  {
    name: 'todo_add',
    description: 'Add a task to your todo list',
    category: 'todo',
    execute: async (interaction) => {
      const task = interaction.options?.getString('task') || 'Sample task';
      await interaction.reply({
        content: `✅ Added to todo: **${task}**`,
        ephemeral: true
      });
    }
  },

  {
    name: 'todo_list',
    description: 'View your todo list',
    category: 'todo',
    execute: async (interaction) => {
      await interaction.reply({
        embeds: [{
          title: '📝 Your Todo List',
          description: 'Todo system not yet implemented with database\n\nExample todos:\n• Learn Discord.js\n• Build awesome bot\n• Add database',
          color: 0x5865F2
        }],
        ephemeral: true
      });
    }
  },

  // ========== QUOTE COMMANDS ==========
  {
    name: 'dailyquote',
    description: 'Get an inspiring daily quote',
    category: 'quote',
    execute: async (interaction) => {
      const quotes = [
        { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
        { text: 'Innovation distinguishes between a leader and a follower.', author: 'Steve Jobs' },
        { text: 'Life is what happens when you\'re busy making other plans.', author: 'John Lennon' },
        { text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
        { text: 'It is during our darkest moments that we must focus to see the light.', author: 'Aristotle' }
      ];
      
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      
      await interaction.reply({
        embeds: [{
          description: `"${quote.text}"\n\n— ${quote.author}`,
          color: 0xFFD700
        }]
      });
    }
  }
];

module.exports = advancedCommands;
