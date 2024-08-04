import nodes_data from './test_json.json';
import edges_data from './test_edges.json'

// Function to load JSON data
// function loadNodes() {
//   console.log(data)
//   return data;
// };

// // Load the nodes when the module is imported
// export const nodesPromise = loadNodes();

export const nodes = nodes_data;
console.log(nodes);

// ===== Edges =====

// export const edges = edges_data.map(edge => ({
//     ...edge,
//     markerEnd: { type: 'MarkerType'}
// }));
export const edges = edges_data;