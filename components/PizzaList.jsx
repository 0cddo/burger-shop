import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN HUAM</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, debitis
        et praesentium earum magnam officiis similique facere excepturi a, quos,
        libero error aperiam nam dignissimos pariatur aliquid ipsam veniam
        voluptatem.
      </p>
      <div className={styles.wrapper}>
        {/* pizzaList props이용하여 컴포넌트 렌더링 */}
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
