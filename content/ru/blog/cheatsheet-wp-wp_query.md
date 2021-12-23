---
title: Шпрагалка по WP_Query
description: '| WP - Wordpress - WP_Query'
---

#Links
- [developer.wordpress.org - Methods](https://developer.wordpress.org/reference/classes/wp_query)
- [Методы класса WP_Query](https://www.internet-technologies.ru/articles/izuchaem-wp-query-svoystva-i-metody.html)

## Медоды экземпляра класса WP_Query

- [developer.wordpress.org - Methods](https://developer.wordpress.org/reference/classes/wp_query/#methods)
- [Методы класса WP_Query](https://www.internet-technologies.ru/articles/izuchaem-wp-query-svoystva-i-metody.html#header-10062-14)

- `__call()` — Make private/protected methods readable for backward compatibility.
- `__construct()` — Constructor.
- `__get()` — Make private properties readable for backward compatibility.
- `__isset()` — Make private properties checkable for backward compatibility.
- `fill_query_vars()` — Fills in the query variables, which do not exist within the parameter.
- `generate_postdata()` — Generate post data.
- `get()` — Retrieves the value of a query variable.
- `get_posts()` — Retrieves an array of posts based on query variables.
- `get_queried_object()` — Retrieves the currently queried object.
- `get_queried_object_id()` — Retrieves the ID of the currently queried object.
- `get_search_stopwords()` — Retrieve stopwords used when parsing search terms.
- `have_comments()` — Whether there are more comments available.
- `have_posts()` — Determines whether there are more posts available in the loop.
- `init()` — Initiates object properties and sets default values.
- `init_query_flags()` — Resets query flags to false.
- `is_404()` — Is the query a 404 (returns no results)?
- `is_archive()` — Is the query for an existing archive page?
- `is_attachment()` — Is the query for an existing attachment page?
- `is_author()` — Is the query for an existing author archive page?
- `is_category()` — Is the query for an existing category archive page?
- `is_comment_feed()` — Is the query for a comments feed?
- `is_comments_popup()` — Whether the current URL is within the comments popup window. — deprecated
- `is_date()` — Is the query for an existing date archive?
- `is_day()` — Is the query for an existing day archive?
- `is_embed()` — Is the query for an embedded post?
- `is_favicon()` — Is the query for the favicon.ico file?
- `is_feed()` — Is the query for a feed?
- `is_front_page()` — Is the query for the front page of the site?
- `is_home()` — Is the query for the blog homepage?
- `is_main_query()` — Is the query the main query?
- `is_month()` — Is the query for an existing month archive?
- `is_page()` — Is the query for an existing single page?
- `is_paged()` — Is the query for a paged result and not for the first page?
- `is_post_type_archive()` — Is the query for an existing post type archive page?
- `is_preview()` — Is the query for a post or page preview?
- `is_privacy_policy()` — Is the query for the Privacy Policy page?
- `is_robots()` — Is the query for the robots.txt file?
- `is_search()` — Is the query for a search?
- `is_single()` — Is the query for an existing single post?
- `is_singular()` — Is the query for an existing single post of any post type (post, attachment, page, custom post types)?
- `is_tag()` — Is the query for an existing tag archive page?
- `is_tax()` — Is the query for an existing custom taxonomy archive page?
- `is_time()` — Is the query for a specific time?
- `is_trackback()` — Is the query for a trackback endpoint call?
- `is_year()` — Is the query for an existing year archive?
- `lazyload_comment_meta()` — Lazyload comment meta for comments in the loop. — deprecated
- `lazyload_term_meta()` — Lazyload term meta for posts in the loop. — deprecated
- `next_comment()` — Iterate current comment index and return WP_Comment object.
- `next_post()` — Set up the next post and iterate current post index.
- `parse_order()` — Parse an 'order' query variable and cast it to ASC or DESC as necessary.
- `parse_orderby()` — Converts the given orderby alias (if allowed) to a properly-prefixed value.
- `parse_query()` — Parse a query string and set query type booleans.
- `parse_query_vars()` — Reparse the query vars.
- `parse_search()` — Generates SQL for the WHERE clause based on passed search terms.
- `parse_search_order()` — Generates SQL for the ORDER BY condition based on passed search terms.
- `parse_search_terms()` — Check if the terms are suitable for searching.
- `parse_tax_query()` — Parses various taxonomy related query vars.
- `query()` — Sets up the WordPress query by parsing query string.
- `reset_postdata()` — After looping through a nested query, this function restores the $post global to the current post in this query.
- `rewind_comments()` — Rewind the comments, resets the comment index and comment to first.
- `rewind_posts()` — Rewind the posts and reset post index.
- `set()` — Sets the value of a query variable.
- `set_404()` — Sets the 404 property and saves whether query is feed.
- `set_found_posts()` — Set up the amount of found posts and the number of pages (if limit clause was used) for the current query.
- `setup_postdata()` — Set up global post data.
- `the_comment()` — Sets up the current comment.
- `the_post()` — Sets up the current post.

