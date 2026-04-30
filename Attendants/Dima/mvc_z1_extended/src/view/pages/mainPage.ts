import { View } from '../abstractView';

export class MainPageView extends View {
  title: string = 'Main Page';
  innerBody: string = `
        <div class="map_and_contact_info">
            <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2333.7583325476376!2d16.185549876318607!3d54.202062972549804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4701cd6afa96748d%3A0xe19f6803f15ed08c!2sWa%C5%84kowicza%2010%2C%2075-445%20Koszalin!5e0!3m2!1sen!2spl!4v1757091415294!5m2!1sen!2spl" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="contact_info">
            <p>Koszalin, ul.Wańkowicza, 10</p>
            <p>Some other contact data</p>
            <p>Email: <a href="mailto:abc@gmail.com">abc@gmail.com</a></p>
            </div>
        </div>`;
}
