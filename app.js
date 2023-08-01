const music = new Audio('chi-can-thay-moi-anh-cuoi.mp3');

/**ARRAY SONGS */
const songs = [
    {
        id: '1',
        songName:'Muộn rồi mà sao còn',
        artist: ' Sơn Tùng M-TP ',
        poster: "img/1.jpg",
        audio: "audio/1.mp3"
    },
    {
        id: '2',
        songName: 'Nơi này có anh',
        artist: ' Sơn Tùng M-TP ',
        poster: "img/2.jpg",
        audio: "audio/2.mp3"
    },
    {
        id: '3',
        songName: 'Lạc trôi',
        artist: ' Sơn Tùng M-TP ',
        poster: "img/3.jpg",
        audio: "audio/3.mp3"
    },
    {
        id: '4',
        songName: 'Chúng ta của hiện tại',
        artist: ' Sơn Tùng M-TP ',
        poster: "img/4.jpg",
        audio: "audio/4.mp3"
    },
    {
        id: '5',
        songName: 'Có chắc yêu là đây',
        artist: ' Sơn Tùng M-TP ',
        poster: "img/5.jpg",
        audio: "audio/5.mp3"
    },
    {
        id:"6",
        songName: 'Hãy trao cho anh',
        artist: ' Sơn Tùng M-TP ',
        poster: "img/6.jpg",
        audio: "audio/6.mp3"
    },
    {
        id:"7",
        songName: 'Nếu biết đó là lần cuối',
        artist: 'Đức Trường',
        poster: "img/7.jpg",
        audio: "audio/7.mp3"
    },
    {
        id:"8",
        songName: 'Đáp án cuối cùng',
        artist: 'Quân AP',
        poster: "img/8.jpg",
        audio: "audio/8.mp3"
    },
    {
        id:"9",
        songName: 'Người như anh',
        artist: 'Mai Tiến Dũng',
        poster: "img/9.jpg",
        audio: "audio/9.mp3"
    },
    {
        id:"10",
        songName: 'Anh nhớ ra',
        artist: 'Vũ.',
        poster: "img/10.jpg",
        audio: "audio/10.mp3"
    },
    {
        id:"11",
        songName: 'Bản tình ca đầu tiên',
        artist: 'Anh Tú live tại XHTĐRLX',
        poster: "img/11.jpg",
        audio: "audio/11.mp3"
    },
    {
        id:"12",
        songName: 'Lan man',
        artist: 'Ronboogz',
        poster: "img/12.jpg",
        audio: "audio/12.mp3"
    },
    {
        id:"13",
        songName: 'Có em(Feat. Low G)',
        artist: 'Madihu',
        poster: "img/13.jpg",
        audio: "audio/13.mp3"
    },
    {
        id:"14",
        songName: 'Xứng đôi cưới thôi ',
        artist: 'Lê Thiện Hiếu',
        poster: "img/14.jpg",
        audio: "audio/14.mp3"
    },
    {
        id:"15",
        songName: 'Chỉ cần có em',
        artist: 'Twenty',
        poster: "img/15.jpg",
        audio: "audio/15.mp3"
    },
    {
        id:"16",
        songName: 'Không yêu xin đừng nói',
        artist: 'UMIE',
        poster: "img/16.jpg",
        audio: "audio/16.mp3"
    },
    {
        id:"17",
        songName: 'Em không hiểu',
        artist: 'Changg',
        poster: "img/17.jpg",
        audio: "audio/17.mp3"
    },
    {
        id:"18",
        songName: 'Có ai đang hẹn hò cùng em chưa',
        artist: 'Quân AP',
        poster: "img/18.jpg",
        audio: "audio/18.mp3"
    },
    {
        id:"19",
        songName: 'Let her go',
        artist: 'Passenger',
        poster: "img/19.jpg",
        audio: "audio/19.mp3"
    },
    {
        id:"20",
        songName: 'Apologize',
        artist: 'Timbaland',
        poster: "img/20.jpg",
        audio: "audio/20.mp3"
    },
    {
        id:"21",
        songName: 'Let me down slowly',
        artist: 'Alec Benjamin',
        poster: "img/21.jpg",
        audio: "audio/21.mp3"
    },
    {
        id:"22",
        songName: 'At my worst',
        artist: 'Pink Sweat$',
        poster: "img/22.jpg",
        audio: "audio/22.mp3"
    },
    {
        id:"23",
        songName: 'I love you 3000',
        artist: 'Stephanie Poetri',
        poster: "img/23.jpg",
        audio: "audio/23.mp3"
    },
    {
        id:"24",
        songName: 'Just say hello',
        artist: 'Melo-D',
        poster: "img/24.jpg",
        audio: "audio/24.mp3"
    },
    {
        id:"25",
        songName: 'TO THE MOON',
        artist: 'Holigan.',
        poster: "img/25.jpg",
        audio: "audio/25.mp3"
    },
    {
        id:"26",
        songName: 'CUPID',
        artist: 'FIFTY FIFTY',
        poster: "img/26.jpg",
        audio: "audio/26.mp3"
    },

]
function createSongItem(songs, startId, endId, songList) {
    songs.forEach((song) => {
        const li = document.createElement('li');
        li.classList.add('songItem');

        if (parseInt(song.id) >= startId && parseInt(song.id) <= endId) {
            const div = document.createElement('div');
            div.classList.add('img_play');

            const img = document.createElement('img');
            img.src = song.poster;

            const playIcon = document.createElement('i');
            playIcon.classList.add('bi', 'playListPlay', 'bi-play-circle-fill');
            playIcon.id = song.id;

            div.appendChild(img);
            div.appendChild(playIcon);

            const h5 = document.createElement('h5');
            h5.innerHTML = `${song.songName} <br> <div class="subtitle">${song.artist}</div>`;

            li.appendChild(div);
            li.appendChild(h5);
            songList.appendChild(li);

            playIcon.addEventListener('click', () => {
                music.src = song.audio;
                music.play();
                wave.classList.add('active2');
                masterPlay.classList.remove('bi-play-fill');
                masterPlay.classList.add('bi-pause-fill');
            });
        }
    });
}

const songList = document.querySelector('.song-list');
const songList1 = document.querySelector('.song-list-1');
const songList2 = document.querySelector('.song-list-2');

createSongItem(songs, 1, 6, songList);
createSongItem(songs, 7, 18, songList1);
createSongItem(songs, 19, Number.MAX_SAFE_INTEGER, songList2);

/*MASTER PLAY */
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})
music.addEventListener('ended', () => {
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
});
/*NEXT SONG */
let nextSong = document.getElementById("next");
let backSong = document.getElementById("back");

backSong.addEventListener('click', () => {
    index--;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = songs[index - 1].audio;
    poster_master_play.src = songs[index - 1].poster;
    music.play();
    title.innerHTML = `${songs[index - 1].songName} <br> <div class="subtitle">${songs[index - 1].artist}</div>`;
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
})
nextSong.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = songs[index - 1].audio;
    poster_master_play.src = songs[index - 1].poster;
    music.play();
    title.innerHTML = `${songs[index - 1].songName} <br> <div class="subtitle">${songs[index - 1].artist}</div>`;
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
})

/*TIME SONG */
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})
    
seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

/*SCROLL POPULAR */
let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let v_pop = document.getElementsByClassName('song-list-1')[0];
left_scroll.addEventListener('click', ()=>{
    v_pop.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    v_pop.scrollLeft += 330;
})
let left_scroll_2 = document.getElementById('left_scroll_2');
let right_scroll_2 = document.getElementById('right_scroll_2');
let us_uk = document.getElementsByClassName('song-list-2')[0];
left_scroll_2.addEventListener('click', ()=>{
    us_uk.scrollLeft -= 330;
})
right_scroll_2.addEventListener('click', ()=>{
    us_uk.scrollLeft += 330;
})

/*VOLUME */
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('input', () => {
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;

    if (vol_a == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    } else if (vol_a > 0 && vol_a <= 50) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    } else {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }
});

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");

Array.from(document.getElementsByClassName("playListPlay")).forEach((element) => {
  element.addEventListener("click", (e) => {
    index = parseInt(e.target.id);
    music.src = `audio/${index}.mp3`;
    music.play();

    let song = songs.find((song) => song.id === String(index));
    if (song) {
      poster_master_play.src = song.poster;
      title.innerHTML = `${song.songName}<br><div class="subtitle">${song.artist}</div>`;
    }
    Array.from(document.getElementsByClassName("playListPlay")).forEach((icon) => {
      if (icon.id === String(index)) {
        icon.classList.remove("bi-play-circle-fill");
        icon.classList.add("bi-pause-circle-fill");
      } else {
        icon.classList.remove("bi-pause-circle-fill");
        icon.classList.add("bi-play-circle-fill");
      }
    });
  });
});