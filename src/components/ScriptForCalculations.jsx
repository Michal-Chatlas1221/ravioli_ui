import React from 'react';

class ScriptForCalculations extends React.Component {

  constructor(props) {
    super(props);
    this.scripts = {
        script1: 'http://script1',
        script2: 'http://script2',
        script3: 'http://script3',
        script4: 'http://script4'
    }
    this.state = {
      selectedBannerOption: 'no',
      selectedCalcType: 'workers',
      currentScript: '<Script src="' + this.scripts.script1 + '"></Script>'
    }
  }

  onBannerOptionChanged(e) {
    this.setState({
      selectedBannerOption: e.currentTarget.value
    },
      this.scriptChanged
    );      
  }

  onCalcTypeChanged(e) {
    this.setState({
      selectedCalcType: e.currentTarget.value
    },
      this.scriptChanged
    );    
  }

  scriptChanged() {
    if (this.state.selectedBannerOption === 'no' && this.state.selectedCalcType === 'workers') {
      var url = this.scripts.script1
    }
    else if (this.state.selectedBannerOption === 'yes' && this.state.selectedCalcType === 'workers') {
      var url = this.scripts.script2
    }
    else if (this.state.selectedBannerOption === 'no' && this.state.selectedCalcType === 'turbolinks') {
      var url = this.scripts.script3
    }
    else {
      var url = this.scripts.script4
    }
    this.setState({
      currentScript: this.generateScript(url)
    });
  }

  generateScript(url) {
    return '<Script src="' + url + '"></Script>';
  }

  submit(event) {
    var myelement = document.getElementById("scriptTag")
    myelement.select()
    document.execCommand('copy')
    window.getSelection().removeAllRanges()
    event.preventDefault()
  }

  render() {
    return(
      <div className="calculations-script-container" id="join-the-project">
        <div className="content">
          <p className="description">We highly encourage you to join our project and help other people/companies with their calculations. Feel free to
            add simple script tag to head section of you website. Now guests will share their compute power while browsing your page.
          </p>
          <form onSubmit={this.submit.bind(this)} id="scriptForm">
            <p>       
              <label>Do you want users to decide if they want to share their compute power by displaying a banner?</label>
            </p>
            <p>
              <label><input type="radio" name="banner" value="no"
             checked={this.state.selectedBannerOption==='no'} onChange={this.onBannerOptionChanged.bind(this)} />No</label>
              <label><input type="radio" name="banner" value="yes"
             checked={this.state.selectedBannerOption==='yes'} onChange={this.onBannerOptionChanged.bind(this)} />Yes</label>
            </p>
            <p>
              <label>Which teachnology should the script use?</label>
            </p>
            <p>
            <label><input type="radio" name="calcType" value="workers"
             checked={this.state.selectedCalcType==='workers'} onChange={this.onCalcTypeChanged.bind(this)} />
             <a href="https://en.wikipedia.org/wiki/Web_worker" target="_blank">Web Workers</a></label>
            <label><input type="radio" name="calcType" value="turbolinks"
             checked={this.state.selectedCalcType==='turbolinks'} onChange={this.onCalcTypeChanged.bind(this)}/>
             <a href="https://github.com/turbolinks/turbolinks" target="_blank">Turbolinks</a></label>
            </p>
            <p className="script-paragraph">
              <input type="text" id="scriptTag" value={this.state.currentScript} size={30} readOnly/>
              <button type="submit" className="button">
                Copy the script tag
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default ScriptForCalculations;