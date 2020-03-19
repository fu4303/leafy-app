import React, {useState, useEffect} from 'react';
import './assets/main.css'
import bodyLeaf from './assets/img/body/leaf.png';
import wayfaeres from './assets/img/glasses/wayfarers.png';
import emeraldEarings from './assets/img/earings/emerald-earrings.png';

function App() {
  const [leafyBody, setLeafyBody] = useState(bodyLeaf);

  let body = [wayfaeres, emeraldEarings];
  let eyes = [emeraldEarings];

  const selectItem = (item, bodyPart) => {

    // eslint-disable-next-line default-case
    switch(bodyPart){
      case 'Body':
        setLeafyBody(item);
        break;
      case 'Eyes':
        console.log(item);
        break;
    }
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-2/3">
            <Preview leafyBody={leafyBody}/>
          </div>
          <div className="w-1/3">
            <Panel title="Body" items={body} selectItem={selectItem} />

            <Panel title="Eyes" items={eyes} selectItem={selectItem}/>

            <Panel title="Hair" items={body} selectItem={selectItem}/>

            <Panel title="Shirt" items={body} selectItem={selectItem}/>

            <Panel title="Pants" items={body} selectItem={selectItem}/>
          </div>
        </div>
      </div>

    </div>
  );
}


const Header = () => {
  return (
    <header className="bg-green-500 text-white mb-12">
      <div className="container mx-auto">
        <div className="flex py-4">
          <div className="w-1/3">
            <h2 className="text-2xl">Leafy Generator | <span className="text-xl">Leafify Yourself</span></h2>
          </div>
        </div>
      </div>
    </header>
  )
}


const Panel = ({title, items, selectItem}) => {
  return (
    <div className="bg-white shadow-lg mb-5 rounded overflow-hidden">
      <div className="bg-gray-200 px-5 py-2">
        <span>{title}</span>
      </div>
      <div className="flex flex-wrap">
        {items.map(item => (
          <div className="w-1/3 item p-5" onClick={() => selectItem(item, title)}>
            <img src={item} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  )
}


const Preview = ({leafyBody}) => {

  return (
    <div>
      <div className="text-center relative h-leafy">
        <div className="body absolute left-96 bottom-0">
          <img className="" src={leafyBody} />
        </div>
      </div>
    </div>
  )
}

export default App;
