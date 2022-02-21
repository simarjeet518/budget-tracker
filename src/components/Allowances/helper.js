export const refactorForChart = (data) =>{
  let totalExpenseByCategory={};
  data.forEach(item => {
   !totalExpenseByCategory[item.category]? totalExpenseByCategory[item.category]= item.amount:   totalExpenseByCategory[item.category] += item.amount;  
  });
 
  return totalExpenseByCategory;
}

export const refactorBudgets = (data) =>{
  let obj ={};
  data.forEach(item =>{
    obj[item.category] = item.budget
  })
   return obj;
}



