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
    else if (this.state.selectedBannerOption === 'no' && this.state.selectedCalcType === 'other') {
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
      <div className="calculations-script-container">
        <p>If u wish to join our project and help other people/companies in their calculations just add simple
           script tag to head section of you website and visitors will now share their compute power while
           your page
        </p>
        <form onSubmit={this.submit.bind(this)} id="scriptForm">
          <label>Do you want users to decide if they want to share their compute power by displaying a banner?</label>
          <label><input type="radio" name="banner" value="no"
           checked={this.state.selectedBannerOption==='no'} onChange={this.onBannerOptionChanged.bind(this)} />No</label>
          <label><input type="radio" name="banner" value="yes"
           checked={this.state.selectedBannerOption==='yes'} onChange={this.onBannerOptionChanged.bind(this)} />Yes</label>
          <label>How do you want our script to perform?</label>
          <label><input type="radio" name="calcType" value="workers"
           checked={this.state.selectedCalcType==='workers'} onChange={this.onCalcTypeChanged.bind(this)} />Workers</label>
          <label><input type="radio" name="calcType" value="other"
           checked={this.state.selectedCalcType==='other'} onChange={this.onCalcTypeChanged.bind(this)}/>Other</label>
          <input type="text" id="scriptTag" value={this.state.currentScript} size={30} readOnly/>
          <button type="submit">
            Copy the script tag!
          </button>
        </form>
      </div>
    );
  }
}

export default ScriptForCalculations;