import React, { Component } from 'react';
import '../App.css'

class FavParkList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <>
        <main>
          <section id="js-results" class="bg-main-display cls-results">
            <h3 class="overlay-section-heading">
              My Favorite Parks (2)
      </h3>
            <div class="group-container wrap">


              <div class="item">
                <div class="park-info-title-container">
                  <h3>Natchez Trace Parkway</h3>
                  <h3>Stop # 1, Rating:5</h3>

                </div>
                <img src="https://www.nps.gov/common/uploads/structured_data/3C80016C-1DD8-B71B-0B91B2FA75DF0C02.jpg"
                  alt="Natchez Trace Parkway" />
                <p>The Natchez Trace Parkway is a 444-mile recreational road and scenic drive through three states. It
                roughly
                follows the "Old Natchez Trace" a historic travel corridor used by American Indians, "Kaintucks," European
                settlers, slave traders, soldiers, and future presidents. Today, people can enjoy not only a scenic drive
            but also hiking, biking, horseback riding, and camping along the parkway.</p>
                <p><b>WebLink</b> : <a href="https://www.nps.gov/natr/index.htm"> Natchez Trace Parkway</a>
                </p>
                <p><b>HQ Address</b> :
            2680 Natchez Trace Parkway
            Tupelo, MS 38804
          </p>
                <a href="wf-pictures.html"></a>
                <button class="btn-generic 0" type="button">More Picture</button>
                {/* <a href="wf-videos.html"></a> */}
                <button class="btn-generic 0" type="button">Video</button>
                {/* <a href="wf-form.html"></a> */}
                <button class="btn-generic-mod" type="button">Modify</button>
                <button class="btn-generic-del" type="button">Delete</button>

              </div>
              <div class="item">
                <div class="park-info-title-container">
                  <h3>Russell Cave National Monument</h3>
                  <h3>Stop # 2, Rating:5</h3>
                </div>
                <img src="https://www.nps.gov/common/uploads/structured_data/3C8726D8-1DD8-B71B-0BD90F30D72A98BF.jpg"
                  alt="Russell Cave National Monument" />
                <p>Russell Cave is an archeological site with one of the most complete records of prehistoric cultures in
                the
                Southeast. In the 1950s, archeologists uncovered a large quantity of artifacts representing over 10,000
                years of use in a single place. Today, Russell Cave National Monument helps bring to light many cultural
    developments of phenomenal human journeys.</p>
                <p><b>WebLink</b> : <a href="https://www.nps.gov/ruca/index.htm"> Russell Cave National Monument</a>
                </p>
                <p><b>HQ Address</b> :
    3729 County Road 98
    Bridgeport, AL 35740
  </p>
                {/* <a href="wf-pictures.html"></a> */}
                <button class="btn-generic 1" type="button">More Picture</button>
                {/* <a href="wf-videos.html"></a> */}
                <button class="btn-generic 1" type="button">Video</button>
                {/* <a href="wf-form.html"></a> */}
                <button class="btn-generic-mod" type="button">Modify</button>
                <button class="btn-generic-del" type="button">Delete</button>

              </div>


            </div>
          </section>

        </main>



      </>

    );
  }
}

export default FavParkList;
