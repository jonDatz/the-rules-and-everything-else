import React, { Component } from 'react';
import { DragDropContext } from "react-beautiful-dnd";
import Item from '../Item/Item';
import List from '../List/List';
import Bank from '../Bank/Bank';
import Html2Canvas from 'html2canvas';
import jsPDF from 'jspdf';

let list1Array = [{ id: 'listItem-1', content: 'first item 1' }];

let list2Array = [{ id: 'listItem-2', content: 'second item 1' }];

let list3Array = [{ id: 'listItem-3', content: 'second item 1' }, { id: 'listItem-4', content: 'second item 2' }, { id: 'listItem-5', content: 'second item 3' }, { id: 'listItem-6', content: 'second item 4' }, { id: 'listItem-7', content: 'second item 5' }, { id: 'listItem-8', content: 'second item 6' }, { id: 'listItem-9', content: 'first item 2' }, { id: 'listItem-10', content: 'first item 3' }, { id: 'listItem-11', content: 'first item 4' }, { id: 'listItem-12', content: 'first item 5' }, { id: 'listItem-13', content: 'first item 6' }, { id: 'listItem-14', content: 'second item 2' }, { id: 'listItem-15', content: 'second item 3' }, { id: 'listItem-16', content: 'second item 4' }, { id: 'listItem-17', content: 'second item 5' }, { id: 'listItem-18', content: 'second item 6' }];

const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  console.log(result);
  return result;
};


class App extends Component {
  state = {
    lists: {
      'bank': {
        id: 'bank',
        items: list3Array
      },
      'list_1': {
        id: 'list_1',
        items: list1Array
      },
      'list_2': {
        id: 'list_2',
        items: list2Array
      },
      'list_3': {
        id: 'list_3',
        items: getItems(1)
      }
    },
    idCounter: 18,
    listOrder: ['list_1', 'list_2', 'list_3']
  }

  print = () => {
    const filename = 'customSheet.pdf';
  
    Html2Canvas(document.querySelector('.printTarget')).then(canvas => {
      let pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
      pdf.save(filename);
    });
  }

  onDragEnd = result => {

    const { source, destination, draggableId } = result;

    console.log(draggableId);
    // dropped outside the list
    if (!destination) {
      return;
    }

    const start = this.state.lists[source.droppableId];
    console.log(start);

    const finish = this.state.lists[destination.droppableId]

    if (finish.items.length >= 8) {
      return;
    };

    if (start === finish && start.id !== 'bank') {
      const items = reorder(
        start.items,
        source.index,
        destination.index
      );
      const reorderedCol = {
        ...start,
        items: items
      };

      const newState = {
        ...this.state,
        lists: {
          ...this.state.lists,
          [reorderedCol.id]: reorderedCol
        }
      };

      this.setState(newState);

      console.log(this.state);
      return;
    }

    if (start.id === 'bank') {
      console.log('bank');
      const bankItems = Array.from(start.items);
      const [removed] = bankItems.splice(source.index, 1);
      const newItem = { id: this.state.idCounter + 1, content: removed.content }
      bankItems.splice(source.index, 0, newItem);
      const newBank = {
        ...start,
        items: bankItems
      };

      const newFinishItems = Array.from(finish.items);
      newFinishItems.splice(destination.index, 0, removed);
      const newFinish = {
        ...finish,
        items: newFinishItems
      };
      const newState = {
        ...this.state,
        idCounter: this.state.idCounter + 1,
        lists: {
          ...this.state.lists,
          [newBank.id]: newBank,
          [newFinish.id]: newFinish
        }
      };

      this.setState(newState);
      return
    }

    const newStartItems = Array.from(start.items);
    const [removed] = newStartItems.splice(source.index, 1);
    newStartItems.splice(source.index, 1);
    const newStart = {
      ...start,
      items: newStartItems
    };

    const newFinishItems = Array.from(finish.items);
    newFinishItems.splice(destination.index, 0, removed);
    const newFinish = {
      ...finish,
      items: newFinishItems
    };
    const newState = {
      ...this.state,
      lists: {
        ...this.state.lists,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };

    this.setState(newState);
    return

  };

  render() {
    return (
      <React.Fragment>
      <div className="sidenav-spacing">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className='container'>
            <div className='row'>
              <Bank id='bank'>
                {this.state.lists.bank.items.map((item, index) => (
                  <Item key={index} id={item.id} index={index} content={item.content} location='bank' />
                ))}
              </Bank>
            </div>
            <br />
            <div className='row printTarget'>
              <div className='col s4'>
                <List id='list_1'>
                  {this.state.lists.list_1.items.map((item, index) => (
                    <Item key={index} id={item.id} index={index} content={item.content} />
                  ))}
                </List>
              </div>
              <div className='col s4'>
                <List id='list_2'>
                  {this.state.lists.list_2.items.map((item, index) => (
                    <Item key={index} id={item.id} index={index} content={item.content} />
                  ))}
                </List>
              </div>
              <div className='col s4'>
                <List id='list_3'>
                  {this.state.lists.list_3.items.map((item, index) => (
                    <Item key={index} id={item.id} index={index} content={item.content} />
                  ))}
                </List>
              </div>
            </div>
            <button onClick={this.print.bind(this)}>Create PDF from List</button>
          </div>
        </DragDropContext>
      </div>
      </React.Fragment>
    );
  }
}

export default App;

