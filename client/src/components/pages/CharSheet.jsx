import React, { Component } from 'react';
import { DragDropContext } from "react-beautiful-dnd";
import { Button } from "react-materialize"; 
import Item from '../Item/Item';
import List from '../List/List';
import Bank from '../Bank/Bank';
import Html2Canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ImagesList from '../../items.json';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  console.log(result);
  return result;
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lists: {
        'bank': {
          id: 'bank',
          items: ImagesList.map(item => item)
        },
        'list_1': {
          id: 'list_1',
          items: []
        },
        'list_2': {
          id: 'list_2',
          items: []
        },
        'list_3': {
          id: 'list_3',
          items: []
        }
      },
      idCounter: 12,
      listOrder: ['list_1', 'list_2', 'list_3']
    };
    this.print = this.print.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
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


    const start = this.state.lists[source.droppableId];
    console.log(start);

    if (!destination && start.id !== 'bank') {
      console.log()
      const removeItemsArray = Array.from(start.items);
      const reducedArray = removeItemsArray.splice(source.index, 1);
      console.log(reducedArray);
      const newStart = {
        ...start,
        items: removeItemsArray
      };
      console.log(newStart);
      console.log(removeItemsArray)

      const newState = {
        ...this.state,
        lists: {
          ...this.state.lists,
          [newStart.id]: newStart
        }
      };

      this.setState(newState);
      return;
    }

    if (!destination) {
      return
    }

    const finish = this.state.lists[destination.droppableId]



    if (finish.items.length >= 4) {
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
      const newItem = { id: this.state.idCounter + 1, image: removed.image }
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
    console.log('Array NewStart Items:' + newStartItems);
    const [removed] = newStartItems.splice(source.index, 1);
    const newStart = {
      ...start,
      items: newStartItems
    };
    console.log(newStart);
    console.log(newStartItems)

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
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="sidenav-spacing">
          <div className="container">
            <div className='row'>
              <Bank id='bank'>
                {this.state.lists.bank.items.map((item, index) => (
                  <Item key={index} id={item.id} index={index} image={item.image} location='bank' />
                ))}
              </Bank>
            </div>
            <br />
            <Button className="pdf-button" onClick={this.print.bind(this)}>Create PDF from List</Button>
            <br />
            <div className='row printTarget' style={{ textAlign: "center", margin: "auto" }}>
              <div className='col s4'>
                <List id='list_1'>
                  {this.state.lists.list_1.items.map((item, index) => (
                    <Item key={index} id={item.id} index={index} image={item.image} />
                  ))}
                </List>
              </div>
              <div className='col s4'>
                <List id='list_2'>
                  {this.state.lists.list_2.items.map((item, index) => (
                    <Item key={index} id={item.id} index={index} image={item.image} />
                  ))}
                </List>
              </div>
              <div className='col s4'>
                <List id='list_3'>
                  {this.state.lists.list_3.items.map((item, index) => (
                    <Item key={index} id={item.id} index={index} image={item.image} />
                  ))}
                </List>
              </div>
            </div>
          </div>
        </div>
      </DragDropContext>
    );
  }
}

export default App;

