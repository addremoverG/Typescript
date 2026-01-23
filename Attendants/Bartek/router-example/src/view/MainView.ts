export class MainView {
	static getMainPage() {
		return `
			<!DOCTYPE html>
			<html lang="en">

			<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<link rel="stylesheet" href="/styles.css">
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
					<title>Kremówki papieskie</title>
			</head>

			<body>
					<div class="flex flex-col">
							<div class="flex flex-center" id="logo"><img src="/images/logo.png" width="350px"></div>
							<div id="menu" class="flex flex-row border border flex-gap bg-color" style="--gap: 30px;">
									<div>Kontakt</div>
									<div>Mapka</div>
									<div>Historia firmy</div>
									<div>Zarząd firmy</div>
									<div>Piszą o nas</div>
									<div>Oferta</div>
									<div>Certyfikat</div>
									<div>Prezentacja firmy</div>
							</div>
							<div class="flex flex-row flex-gap" style="--gap: 10px;">
									<div id="map">
											<iframe
													src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.255271177997!2d19.929241677561002!3d50.062780815199815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b0c02a30b5d%3A0x13c11baa79e02b3d!2sCukiernia%20Wadowice!5e0!3m2!1sen!2spl!4v1764328309766!5m2!1sen!2spl"
													width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
													referrerpolicy="no-referrer-when-downgrade"></iframe>
									</div>
									<div id="contact">
											<p>ul Studencka 1</p>
											<p>31-116 Kraków</p>
											<p>Tel: <a href="tel:691331584">691331584</a></p>

									</div>
							</div>
							<div id="footer" class="flex flex-row flex-gap flex-spacebetween border bg-color" style="--gap: 10px">
									<div id="admin">Kontakt do administratora strony: <a href="mailto:papaj@vatican.vn">admin</a></div>
									<div id="guests">Gości: 2137</div>
							</div>
					</div>
			</body>

			</html>
		`;
	}
}
