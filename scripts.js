const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

let tl = gsap.timeline();
// console.log(tl)

tl.to("#loader", {
  height: 0,
  duration: 1,
  ease: Circ.easeInOut,
  delay: 2,
});

tl.to("#green", {
  height: "100%",
  top: 0,
  duration: 1,
  delay: -0.5,
  ease: Circ.easeInOut,
});

tl.to("#green", {
  height: "0",
  duration: 1,
  delay: -0.3,
  ease: Circ.easeInOut,
});

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (e) {
    // add the span tag in h1 element
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");

    // add the classname in span tag
    spanParent.classList.add("parent");
    spanChild.classList.add("child");

    // add the text in child eg:span <span class="child">Creative</span>
    spanChild.innerHTML = e.innerHTML;
    // add the span child in span parent tag eg: <span class="parent"><span class="child">Creative</span></span>
    spanParent.appendChild(spanChild);

    // jo kuch bhi likha hai usko hat do
    e.innerHTML = "";

    // add the span parent tag eg:<h1 id="reveal"><span class="parent"><span class="child">Creative</span></span></h1>
    e.appendChild(spanParent);
  });
}

revealToSpan();

gsap.to(".reveal .parent .child", {
  y: "-100%",
  ease: Circ.easeInOut,
  duration: 1,
  delay: 1.5,
});

gsap.to(".child span", {
  x: "-10%",
  // ease:Expo.easeInOut,
  // ease:Circ.easeInOut,
  ease: Power3.easeInOut,
  duration: 1,
  // stagger:.1,
  delay: 1,
});

gsap.to(".child #kumar", {
  x: "-30%",
  // ease:Expo.easeInOut,
  ease: Circ.easeInOut,
  duration: 1,

  delay: 1,
});

gsap.to(".child .is", {
  x: "-180%",
  // ease:Expo.easeInOut,
  ease: Circ.easeInOut,
  duration: 1,
  delay: 1,
});
gsap.to(".child .a", {
  x: "-380%",
  // ease:Expo.easeInOut,
  ease: Circ.easeInOut,
  duration: 1,
  delay: 1,
});

function cardshow() {
  var showImage;

  document.querySelectorAll("#images").forEach(function (cnt) {
    cnt.addEventListener("mousemove", function(dets){
      // console.log(dets.target)
      // console.log(dets.target.dataset)
      document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
      showImage = dets.target;
      document.querySelector("#cursor").children[showImage.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
      showImage.style.filter = "grayscale(1)"

      document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color;
    });
    cnt.addEventListener("mouseleave", function(){
      console.log(document.querySelector("#cursor").children[showImage.dataset.index])
      document.querySelector("#cursor").children[showImage.dataset.index].style.opacity = 0;
      showImage.style.filter = "grayscale(0)"
      document.querySelector("#work").style.backgroundColor = "#fff"


  
    });
  });
}

cardshow()