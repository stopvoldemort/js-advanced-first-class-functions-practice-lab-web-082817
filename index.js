// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  let new_drivers = drivers.filter(function(driver) {
    return driver.hometown === location
  })
  new_drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function driversByRevenue(drivers) {
  const new_drivers = drivers.slice(0)
  return new_drivers.sort(function(a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  const new_drivers = drivers.slice(0)
  return new_drivers.sort(function(a, b) {
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers) {
  const new_drivers = drivers.map(function(driver) {
    return driver.revenue
  })
  return new_drivers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  })
}

function averageRevenue(drivers) {
  return (totalRevenue(drivers) / drivers.length)
}
