import { useState } from 'react';
import Checkboxes from '../components/Checkboxes';

export default function NestedCheckboxes() {
     const checkboxesData = [
          {
               id: 1,
               name: 'Electronics',
               checked: false,
               count: 0,
               children: [
                    {
                         id: 2,
                         name: 'Mobile phones',
                         checked: false,
                         count: 0,
                         children: [
                              {
                                   id: 3,
                                   name: 'iPhone',
                                   count: 0,
                                   checked: false,
                              },
                              {
                                   id: 4,
                                   name: 'Android',
                                   count: 0,
                                   checked: false,
                              },
                         ],
                    },
                    {
                         id: 5,
                         name: 'Laptops',
                         checked: false,
                         count: 0,
                         children: [
                              {
                                   id: 6,
                                   name: 'MacBook',
                                   checked: false,
                              },
                              {
                                   id: 7,
                                   name: 'Surface Pro',
                                   checked: false,
                              },
                         ],
                    },
               ],
          },
          {
               id: 8,
               name: 'Books',
               checked: false,
               count: 0,
               children: [
                    {
                         id: 9,
                         name: 'Fiction',
                         checked: false,
                    },
                    {
                         id: 10,
                         name: 'Non-fiction',
                         checked: false,
                    },
               ],
          },
          {
               id: 11,
               name: 'Toys',
               count: 0,
               checked: false,
          },
     ];
     const [boxes, setBoxes] = useState(checkboxesData);
     return (
          <div>
               <Checkboxes defaultCheckboxData={checkboxesData} />
               
          </div>
     );

}
