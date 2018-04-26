/*
RESOURCES:
https://css-tricks.com/snippets/css/clear-fix/
https://www.taniarascia.com/you-dont-need-a-framework/
*/

/*
QUESTIONS/NEED TO FIX
Search for QUEST
-how to get scrolling navbar to also have side margin - on right???? to match white space around portfolio page?

-go back in and adjust rem and em?

-go back in and make semantic - will need to refactor later!!!!!!!!
.container => main; row is section; column is article/aside
<div class="container">
  <div class="row">
    <div class="one column">Column</div>
  </div>
  <div class="row">
    <div class="half column">Half column</div>
    <div class="half column">Half column</div>
  </div>
</div>

<main>
  <section>
	  <article class="content column">
		</article>
		<aside class="sidebar column">
    </aside>
	</section>
</main>
*/
/*
NOTES:
#top, right, bottom, left

#margin - use when

#padding - use when

#changed 'row' to 'section' for semantic

#changed 'col-lg-12 col-md-12 col-sm-12 col-xs-12' to allocate-container' 

#<p> => native line break after text

#top is for tweak an element with use of position property.
margin-top is for measuring the external distance to the element, in relation to the previous one.

Also, top behavior can differ depending on the type of position, absolute, relative or fixed.
*/


/*clearfix - just contains columns
  It is one of those ugly things that we all just have to live with as it is really the only reasonable way of ensuring floated child elements don't overflow their parents. There are other layout schemes out there but floating is too commonplace in web design/development today to ignore the value of the clearfix hack. (what???? - Not 100% what this really means but have a feeling this is good to include for current/future styling)
  */


//npm run build, drag files -> deploy through cyberduck,