import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import TestContext from '../contexts/TestContext';

const MobxFav = observer(() => {
  const mainStore = useContext(TestContext);

  return (
    <div>
      {mainStore.otherStore.favourite.map((item, index) => <p key={index}>{`start: ${item.start}, finish: ${item.finish}`}</p>)}
    </div>
  )
});

export default MobxFav;