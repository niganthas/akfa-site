const getTransitionStyles = timeout => {
  return {
    entering: {
      opacity: 0,
      transform: `translateX(-20px)`,
    },
    entered: {
      transition: `all ${timeout}ms ease-in-out`,
      opacity: 1,
      transform: `translateX(0)`,
    },
    exiting: {
      transition: `all ${timeout}ms ease-in-out`,
      opacity: 0,
      transform: `translateX(20px)`,
    },
  }
}

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status]

export default getTransitionStyle
