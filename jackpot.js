function spinReels() {
    // Generate random values for each reel (between 1 and 9)
    let reel1 = Math.floor(Math.random() * 9) + 1;
    let reel2 = Math.floor(Math.random() * 9) + 1;
    let reel3 = Math.floor(Math.random() * 9) + 1;
    // let reel4 = Math.floor(Math.random() * 9) + 1;

    // Set the values to the reels
    document.getElementById('reel1').innerHTML = reel1;
    document.getElementById('reel2').innerHTML = reel2;
    document.getElementById('reel3').innerHTML = reel3;
    // document.getElementById('reel4').innerHTML = reel4;

    // Check if all three reels have the same value
    if (reel1 === reel2 && reel1 === reel3 && reel1 === reel4) {
        document.getElementById('result').innerHTML = "🎉 Jackpot! You win! 🎉";
        document.getElementById('result').style.color = 'green';
        window.alert("🎉 Jackpot! You win! 🎉");
    } else {
        document.getElementById('result').innerHTML = "Try again!";
        document.getElementById('result').style.color = 'red';
    }
}