
// const useAxios = (opts, axiosInstance = defaultAxios) => {
//     const [state, setState] = useState({
//         loading: true,
//         error: null,
//         data: null
//     })

//     const [trigger, setTrigger] = useState(0);
//     const refetch = () => {
//         setState({
//             ...state,
//             loading: true
//         });
//         // 날짜가 지나면 값이 막 바뀜.
//         setTrigger(Date.now())
//     }
//     if (!opts.url) {
//         console.log("연결안됌;")
//     }

//     useEffect(() => {
//         axiosInstance(opts)
//             .then(data => {
//                 setState({
//                     ...state,
//                     loading: false,
//                     data
//                 });
//             }).catch(error => {
//                 setState({ ...state, loading: false, error })
//             })
//         // 기간이 지나면 저절로 refetch
//     }, [trigger]);
//     return { ...state, refetch };
// };


// import React, { useState, useEffect, useRef } from 'react';
// import useAxios from './useAxios';

// const App = () => {

//   const { loading, error, data, refetch } = useAxios({
//     url: "https://yts.mx/api/v2/list_movies.json"
//   })

//   console.log(`loading: ${loading}, Error: ${error}, data: ${JSON.stringify(data)}`);
//   return (
//     <div>
//       <h1>{data && data.status}</h1>
//       <h2>{loading && "Loading"}</h2>
//       <button onClick={refetch}>refetch</button>
//     </div>
//   );
// }