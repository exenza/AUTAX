// tools.js
// ========
module.exports = {
    roundCents: function(amount) {
        if (amount % 1 >= 0.50) {
            amount++
        }
        return parseInt(amount)
    },

    getPeriod: function(period) {
        month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        month = month[period - 1]
        return "1 " + month + " - " + new Date(new Date().getFullYear(), period, 0).getDate() + " " + month
    },

    error: function(text, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({
            error: text
        }));
    }

}