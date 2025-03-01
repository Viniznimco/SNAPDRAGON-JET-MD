const axios = require('axios');
const { cmd } = require('../command');

// Repo info
cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Info about the bot repository",
    category: "main",
    react: "✈️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        // Fetch repository data from GitHub API
        const repoResponse = await axios.get('https://github.com/Viniznimco/SNAPDRAGON-JET-MD');
        const { stargazers_count, forks_count } = repoResponse.data;
        const userCount = forks_count * 5; // Estimate user count based on forks

        // Construct the message
        const message = `
*Hello there, SNAPDRAGON JET User! 👋*

💻 *De Junior MD Repository Info*:
⭐ *Stars*: ${stargazers_count}
🍴 *Forks*: ${forks_count}
👥 *Users*: ${userCount}
🔗 *Repository*: https://github.com/Viniznimco/SNAPDRAGON-JET-MD
> ✨ SNAPDRAGON JET WhatsApp Bot – Simple. Smart. Feature-packed. 🚀
Effortlessly elevate your WhatsApp experience with our cutting-edge bot technology! 🎊
*💡 Tip: Don’t forget to fork the repo and leave a star to show your support! 🌟*

🙌 Thank you for choosing SNAPDRAGON JET MD – your ultimate bot companion! 🎉
        `;

        // Send the repository info as a text message
        await conn.sendMessage(from, { text: message }, { quoted: mek });

        // Send a related image with additional newsletter forwarding context
        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/xb17f0.jpg` },
                caption: message,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363200367779016@newsletter',
                        newsletterName: 'SNAPDRAGON JET MD✈️'💓,
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send an audio response (PTT voice note)
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/v5t4ju.jpg' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error('Error fetching repository data:', error);
        reply(`❌ *Error fetching repository data:* ${error.message}`);
    }
});
