
class InventoryForm extends React.Component {
    
    state = {
        items: [],
        inputErrors: {},
        fields: {
            sku:'',
            amount:'',
        }
    };

  updateFormInput = (e) => {
        const fields = this.state.fields; 
        fields[e.target.name] = e.target.value;
        this.setState({ fields });
    };

  onFormSubmit = (e) => {
      const items = [...this.state.items,
                    this.state.fields];
//      const inputErrors = this.validate(item);
//      this.setState({ inputErrors });
      e.preventDefault();
        
//      if (Object.keys(inputErrors).length)
//        return;
      
      this.setState({
                    items,
                    fields: {
                    sku:'',
                    amount:'',
                    },
      });
  };

  validate = (item) => {
      const errors = {};
      if (!item.sku) errors.sku = 'SKU Required';
      if (item.sku && !isLength(item.sku, { min: 6 })) errors.sku = 'Invalid SKU';
      if (!item.amount) errors.amount = 'Amount Required';
      return errors;
  };

    deleteFormItem = (e) => {
        var items = this.state.items;
        var index = items.indexOf(e.target.value);
        items.splice(index, 1);
        this.setState({
        items: items
    });
    };    


    render() {
        return (
            <div>
                <div className='ui cards'>
                    <div id='card_one' className='card'>
                        <div className='content'>
                            <div className='ui form' onSubmit={this.onFormSubmit}>
                                <form onSubmit={this.onFormSubmit}>
                                    <label>SKU <input id='sku_input' type='text' name='sku'        placeholder='Input SKU here.' value={this.state.fields.sku} onChange={this.updateFormInput} /> </label>
                                    <span>{this.state.inputErrors.sku}</span>
            
                                    <label>Amount <input type='text' name='amount' placeholder='Input amount here.' value={this.state.fields.amount} onChange={this.updateFormInput} /> </label>
                                
            
                                <input id='add_button' className='ui blue basic button' type='submit' value='Add To List' />
                                
                                </form>
                            </div>
                        </div>
                    </div>
                        <div id='item_list' className='card'>
                                <div className='content'>
                                    <ul>
                                        { this.state.items.map (({sku, amount }, i) => 
                                            <li key={i}>{ sku } ({ amount })</li> 
                                        ) }
                                    </ul>
                                    <span id='trash_icon'
                                    className='right floated trash icon'
                                    onClick={this.deleteFormItem}
                                    >
                                        <i className='trash icon' />
                                    </span>
                                </div>
                        </div>  
                </div>
<SendButton />
            </div>                  
               
        );
    }
}



class SendButton extends React.Component {
    render() {
        return(
            <div id='send_button'>
                <div className='ui basic content right aligned segment'>
                  <button className='ui basic green button icon'>
                    <i className="checkmark icon"></i>
                    Send to BOH
                  </button>
                </div>    
            </div>
        );
    }
}

ReactDOM.render(
  <InventoryForm />,
  document.getElementById('content')
);