// Definir estado inicial
const initialState = [{
   id: 1,
   todo: 'Comprar pan',
   done: false
}];

// Definir reducer, recibe un estado y una accion
const todoReducer = ( state = initialState, action ) => {
   // Procesar accion
   if(action?.type === 'agregar'){
      return [...state, action.payload];
   }

   // El reducer siempre va a retornar un nuevo state
   return state;
};

let todos = todoReducer();

// Definiendo el nuevo todo para agregar al state via reducer
// No se puede agregar directo al state, se necesita enviar por una accion
const newTodo = {
   id: 2,
   todo: 'Comprar vino',
   done: false
}

// Definir accion para mandar newTodo
const agregarTodoAction = {
   type: 'agregar',
   payload: newTodo
}

// Llamar el todoReducer por medio de la variable todos
todos = todoReducer( todos, agregarTodoAction );

console.log(todos);


