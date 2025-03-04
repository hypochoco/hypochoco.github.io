
import os
import json

# NOTE:
    # Don't use ' in the alt text

def process_header(header):
    if 'repo' in header:
        return f"<div className={{styles.title}}><h2 className={{styles.title__text}}>{header['title']}</h2><p className={{styles.title__info}}>by {header['author']} | {header['date']} | <a href={{'{header['repo']}'}}>Project repository</a></p></div>"
    else:
        return f"<div className={{styles.title}}><h2 className={{styles.title__text}}>{header['title']}</h2><p className={{styles.title__info}}>by {header['author']} | {header['date']}</p></div>"

def process_subtitle(text):
    return f'<p className={{styles.subtitle}}>{{"{text[1:]}"}}</p>'

def process_text(text):
    # process links
    split_text = text.split("`")
    processed_div = "<p>"
    flip = False
    for item in split_text:
        if not flip:
            processed_div += f'{{"{item}"}}'
            flip = True
        else:
            link_split = item.split("|")
            processed_div += f"<a href={{'{link_split[1]}'}}>{link_split[0]}</a>"
            flip = False
    processed_div += '</p>'
    return processed_div

def process_image(image):
    alt_text = image[image.index("[")+1:image.index("]")]
    src = image[image.index("(")+1:image.index(")")]
    return f"<div><Image src='{src}' alt='{alt_text}' width={{0}} height={{0}} sizes='100vw' style={{{{ width: '100%', height: 'auto', marginTop: '1em' }}}} /><p className={{styles.caption}}>{alt_text}</p></div>"

def process_video(video):
    alt_text = video[video.index("[")+1:video.index("]")]
    src = video[video.index("(")+1:video.index(")")]
    return f"<div><video style={{{{marginTop: '1em'}}}} width='100%' height='auto' controls={{false}} preload='none' autoPlay muted loop><source src='{src}' type='video/mp4' /><track srcLang='en' label='English' />Your browser does not support the video.</video><p className={{styles.caption}}>{alt_text}</p></div>"

def process_list(list):
    return list

def process_body(body):
    output = ""
    for item in body:
        if item[0:4] == "<ul>":
            output += process_list(item)
        elif item[0:2] == "!!":
            output += process_video(item)
        elif item[0] == "!":
            output += process_image(item)
        elif item[0] == "#":
            output += process_subtitle(item)
        else:
            output += process_text(item)
    return output

def write_html(html, path):
    target = "src/app/" + path
    if not os.path.exists(target): os.mkdir(target)
    with open(target + "/page.js", "w") as f:
        f.write("import styles from '../../blogs.module.css'\n")
        f.write("import Image from 'next/image'\n")
        f.write(f"export default function Blog(){{return({html})}}")

def generate_blogs(src):
    # iterate over files
    for path in os.listdir("blogs/" + src):
        # gather file data
        with open("blogs/" + src + "/" + path, "r") as f:
            data = json.load(f)
        output = process_header(data["header"])
        output += process_body(data["body"])
        html = f"<div className={{styles.blog}}><div className={{styles.body}}>{output}</div></div>"

        # write html dat into files
        write_html(html, "blogs/(" + src + ")/" + path[:-5])

if __name__ == "__main__":
    generate_blogs("architecture")
    generate_blogs("art")
    generate_blogs("programming")
