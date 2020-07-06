import React from 'react';

import AddOption from './AddOption';


import Options from './Options';

import Action from './Action';

import Header from './Header';

import OptionModal from './OptionModal';






export default class IndecisionApp extends React.Component {


  state = {
    options: [],
    selectedOption: undefined
  };


  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }));
    // this.setState({
    //   options: []
    // })
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option
      })
    }))
  }

  // handleDeleteOption(optionToRemove) {
  //   this.setState({
  //     options: [...this.state.options.filter((option) => {
  //       return optionToRemove !== option
  //     })]
  //   })

  // }



  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option

    }));



  }
  handleSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }))


    // this.setState((prevState) => {
    //   return {
    //     options: prevState.options.concat(option)//[...this.state.options, option]
    //   };
    // })
  }


  componentDidMount() {
    //fetching data from localStorage
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options }));

      }



    } catch (e) {

    }

  }

  componentDidUpdate(prevProps, prevState) {
    // Saving Data in localStorage

    try {

      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json)
      }
    } catch (e) {

    }


  }


  render() {

    const subtitle = 'put your life in the hands of a computer';

    return (
      <div>


        <Header subtitle={subtitle} />
        <div className="container">
          <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
          <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
          <AddOption handleAddOption={this.handleAddOption} />
        </div>


        <OptionModal selectedOption={this.state.selectedOption} handleSelectedOption={this.handleSelectedOption} />
      </div>
    )
  }
}






