class InventoryForm extends React.Component {
    render() {
        return (
            <div className='ui centered card'>
                <div className='content'>
          
                    <div className='ui form'>
                        <div className='field'>
                            <label>SKU <input type='text' name='sku' placeholder='Input SKU here.' /> </label>
                        </div>
                        <div className='field'>
                            <label>Amount <input type='text' name='sku' placeholder='Input amount here.' /> </label>
                        </div>
                        <div className="ui center aligned">
                            <button className="ui basic green button icon">
                                <i className="plus square outline icon"></i>
                                Add SKU
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
  <InventoryForm />,
  document.getElementById('content')
);