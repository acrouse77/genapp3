<template>
  <div class="Row">
	<dna>
		<column>
		<dot></dot>
		<dot></dot>
		<dot></dot>
		<dot></dot>
		<dot></dot>
		<dot></dot>
		<dot></dot>
		<dot></dot>
		</column>
		<column>
		<dash></dash>
		<dash></dash>
		<dash></dash>
		<dash></dash>
		<dash></dash>
		<dash></dash>
		<dash></dash>
		<dash></dash>
		</column>
		<column>
		<dot></dot>
		<dot></dot>
		<dot></dot>
		<dot></dot>
		<dot></dot>
		<dot></dot>
		<dot></dot>
		<dot></dot>
		</column>
	</dna>
  </div>
</template>

<script>

</script>

<style lang="scss">
$number-of-molecules: 8;
$molecule-diameter: 3vh;
$width-multiplier: 7;
$animation-duration: 1400ms;

$molecule-color-1: mediumvioletred;
$molecule-color-2: palevioletred;
$connection-color: silver;


// ANIMATIONS
@keyframes molecule-animation {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(#{($molecule-diameter * $width-multiplier) - $molecule-diameter}, 0, 0); }
}

@keyframes connection-animation {
  from { transform: scale3d(1, 1, 1); }
  to { transform: scale3d(0, 1, 1); }
}
// animations end


// RESET
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  html,
  & {
    min-height: 100%;
    width: 100%;
  }
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font: {
    family:
      "Open Sans Condensed",
      sans-serif;
    size: 100%;
  }
}
// reset end

body {
  display: flex;
  flex-flow: column;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: white;
}

main {
  flex: 1;
  display: flex;
  align-items: center;
}

dna {
  display: flex;
  flex-flow: row nowrap;
  width: #{$molecule-diameter * $width-multiplier};
  position: relative;
}

column {
  display: flex;
  flex-flow: column;
  width: $molecule-diameter;
  
  &:nth-of-type(3) {
    position: absolute;
    left: 0;
  }
}

dot {
  display: block;
  width: $molecule-diameter;
  height: $molecule-diameter;
  margin-bottom: $molecule-diameter;
  border-radius: 50%;
  background-color: $molecule-color-1;
  animation: {
    name: molecule-animation;
    duration: $animation-duration;
  }
  
  column:nth-of-type(1) & {
    background-color: $molecule-color-1;
    animation-direction:
      alternate,
      normal;
  }

  column:nth-of-type(3) & {
    background-color: $molecule-color-2;
    animation-direction:
      alternate-reverse,
      normal;
  }
}

dash {
  $height: $molecule-diameter / 3;
  
  display: block;
  height: $height;
  width: #{($molecule-diameter * $width-multiplier) - ($molecule-diameter * 3)};
  margin: {
    top: $height;
    bottom: #{$molecule-diameter + $height};
    left: #{$molecule-diameter / 2};
  }
  border-radius: #{$height / 2};
  background-color: $connection-color;
  animation: {
    name: connection-animation;
    duration: #{$animation-duration / 2};
    direction: alternate;
  }
}

dot,
dash {
  animation: {
    timing-function: ease-in-out;
    iteration-count: infinite;
  }
  
  @for $i from 1 through $number-of-molecules {
    &:nth-of-type(#{$i}) {
      animation-delay: -#{($animation-duration / $number-of-molecules) * $i};
    }
  }
}


// FOOTER
footer {
  width: 100%;
  padding: 2rem;
  background-color: rgba(black, 0.2);
  
  h1,
  p {
    max-width: 50rem;
    margin: {
      right: auto;
      left: auto;
    }
  }
  
  h1 {
    margin-bottom: 0.5rem;
    color: white;
    font: {
      family: 'Life Savers';
      size: 4rem;
      weight: 100;
    }
    text-align: center;
    letter-spacing: 0.16em;
  }
  
  p {
    line-height: 1.3;
  }
}
</style>
