 // create the scrollama instance
    const scroller = scrollama();

    // setup and bind events
    scroller
      .setup({
        step: ".step",
        offset: 0.5  // trigger in the middle of the viewport
      })
      .onStepEnter(response => {
        response.element.classList.add("is-active");
      })
      .onStepExit(response => {
        response.element.classList.remove("is-active");
      });

    // handle window resizes
    window.addEventListener("resize", scroller.resize);

