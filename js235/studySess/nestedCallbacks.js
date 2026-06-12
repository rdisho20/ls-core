/*
// Question​: Lurch's evening duties are currently defined by a series of nested callback functions. 
This is unseemly. Refactor the lurchsChores function to use async/await syntax while preserving the exact sequence of operations and console logs. 
The provided helper functions (fetchOrganMusic, polishOrgan, playToccata) simulate asynchronous operations and must not be modified.
*/


async function fetchOrganMusicAsync() {
  return new Promise((resolve, reject) => {
    fetchOrganMusic((err, music) => {
      if (err) {
        reject(err);
      }
      resolve(music);
    });
  });
}

async function polishOrganAsyc(music) {
  return new Promise((resolve, reject) => {
    polishOrgan(music, (err, isPolished) => {
      if (err) {
        reject(err);
      }
      resolve(isPolished);
    })
  })
}

async function playToccataAsyc(isPolished) {
  return new Promise((resolve, reject) => {
    playToccata(isPolished, (err, status) => {
      if (err) {
        reject(err);
      }
      resolve(status);
    })
  })
}

function fetchOrganMusic(callback) {
  console.log("Fetching 'Toccata and Fugue in D minor'...");
  setTimeout(() => {
    const sheetMusic = { title: "Toccata and Fugue in D minor" };
    console.log("Music fetched.");
    callback(null, sheetMusic);
  }, 1000);
}

function polishOrgan(music, callback) {
  console.log("Polishing the organ keys...");
  setTimeout(() => {
    if (!music) {
      callback(new Error("No music to inspire me."));
      return;
    }
    const polished = true;
    console.log("Organ polished.");
    callback(null, polished);
  }, 800);
}

function playToccata(isPolished, callback) {
  console.log("Preparing to play...");
  setTimeout(() => {
    if (!isPolished) {
      callback(new Error("Cannot play on a dusty organ."));
      return;
    }
    console.log("*Loud, ominous organ music fills the mansion*");
    callback(null, "Done.");
  }, 1500);
}

// This is the function you will refactor.
async function lurchsChoresAsync() {
  try {
    const sheetMusic = await fetchOrganMusicAsync();
    const isPolished = await polishOrganAsyc(sheetMusic);
    const playTocatta = await playToccataAsyc(isPolished);
    console.log(playTocatta);
  } catch (err) {
    console.log(err);
  }
}

/*
function lurchsChores() {
  fetchOrganMusic((err, music) => {
    if (err) {
      console.error(err);
      return;
    }
    polishOrgan(music, (err, polished) => {
      if (err) {
        console.error(err);
        return;
      }
      playToccata(polished, (err, status) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`Evening duties status: ${status}`);
      });
    });
  });
}
*/

// Your refactored async/await function will be called here.
lurchsChoresAsync();