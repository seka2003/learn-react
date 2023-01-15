import React from 'react';

function SubContent() {
    function openLink() {
      window.open("https://www.facebook.com/profile.php?id=");
    }
    return (
      <main>
        <div className="p-2 mb-4 bg-grey rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-9 fw-bold">Prayut Chan-o-cha</h1>
            <p className="col-md-11 fs-5">
              Prayut Chan-o-cha is a retired Royal Thai Army general who is the current 
              Prime Minister of Thailand. He first came to power in 2014 as the leader of 
              the military junta that seized control of the government in a coup d'etat. 
              He was later appointed as Prime Minister by a military-backed legislature, 
              and was elected to the post by a civilian legislature in 2019. Prior to his
               political career, Prayut had a long career in the military, rising to the rank 
               of army chief and serving as commander-in-chief of the armed forces. He has been 
               criticized for his human rights record and for restricting civil liberties during his
                time as leader of the junta.
            </p>
            <button className="btn btn-primary" onClick={openLink}>Link</button>
          </div>
        </div>
      </main>
    );
  }

export default SubContent;
