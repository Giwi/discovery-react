import './App.css';

import "@senx/discovery-widgets/dist/discovery/discovery.esm.js"

function App() {

  const ws = `{
  'title' 'Test'
  'description' 'Dashboard test'
  'tiles' [ 
    {
      'title' 'test' 
      'options' { 'autoRefresh' 1 }
      'x' 0 'y' 0 'w' 12 'h' 4
      'type' 'area'
      'macro' <%
        1 4 <%
          DROP NEWGTS 'g' STORE
          1 10 <%
            'ts' STORE $g $ts RAND + STU * NOW + NaN NaN NaN RAND ADDVALUE DROP
          %> FOR
          $g
        %> FOR
      %>
    }
  ]
}`

  return (
    <discovery-dashboard url="https://sandbox.senx.io/api/v0/exec" dashboard-title="Test">{ws}</discovery-dashboard>
  );
}

export default App;
