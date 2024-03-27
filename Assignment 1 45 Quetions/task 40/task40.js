function make_album(artist_name, album_title, no_of_tracks) {
    if (no_of_tracks) {
        return { artist_name: artist_name, album_title: album_title, no_of_tracks: no_of_tracks };
    }
    else {
        return { artist_name: artist_name, album_title: album_title };
    }
}
console.log(make_album("Atif Aslam", "AI"));
console.log(make_album("Sajjad Ali", "Governer House"));
console.log(make_album("Nasoobo Lal", "Aalu Pyaz ki sabzi"));
console.log("\nAlbums with no of tracks....");
console.log(make_album("Atif Aslam", "AI", 3));
console.log(make_album("Sajjad Ali", "Governer House", 4));
console.log(make_album("Nasoobo Lal", "Aalu Pyaz ki sabzi", 5));
