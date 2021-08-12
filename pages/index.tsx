import type {NextPage} from 'next';

import {test} from 'lib/my-lib';

console.log({test, run_test_fun: test()});

const Home: NextPage = () => {
  return <div>Hello</div>;
};

export default Home;
