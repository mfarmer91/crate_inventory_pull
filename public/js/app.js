
class InventoryForm extends React.Component {
    
    state = {
        items: [],
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
      this.setState({   items,
                        fields: {
                            sku:'',
                            amount:'',
                        }
                    });
      e.preventDefault();
      
  };

    render() {
        return (
            <div>
                <div className='ui cards'>
                    <div className='card'>
                        <div className='content'>
                            <div className='ui form' onSubmit={this.onFormSubmit}>
                                <form onSubmit={this.onFormSubmit}>
                                    <label>SKU <input type='text' name='sku'        placeholder='Input SKU here.' value={this.state.fields.sku} onChange={this.updateFormInput} /> </label>
                                    <label>Amount <input type='text' name='amount' placeholder='Input amount here.' value={this.state.fields.amount} onChange={this.updateFormInput} /> </label>
                                <input type='submit' />
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
                                </div>
                        </div>  
                </div>
            </div>                  
               
        );
    }
}



class SendButton extends React.Component {
    render() {
        return(
            <div>
                <div className='ui basic content center aligned segment'>
                  <button className='ui basic blue button icon'>
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