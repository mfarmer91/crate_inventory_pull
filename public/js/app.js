class InventoryFormList extends React.Component {
    render() {
        return (
            <div>
                <EditableInventoryForm />,
                <SendButton />
            </div>
        );
    }
}

class EditableInventoryForm extends React.Component {
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
                        <AddFormButton />
                    </div>
                </div>
            </div>
        );
    }
}

class AddFormButton extends React.Component {
    render() {
        return(
            <div>
                <div className="ui divider"></div>
                <div className="ui center aligned">
                    <button className="ui basic green button icon">
                        <i className="plus square outline icon"></i>
                        Add SKU
                    </button>
                </div>
            </div>
        );
    }
}

class SendButton extends React.Component {
    render() {
        return(
            <div>
            <div className="ui divider"></div>
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
  <InventoryFormList />,
  document.getElementById('content')
);