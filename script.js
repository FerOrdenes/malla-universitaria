const container = document.getElementById("malla");
malla.forEach(sem => {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h2>Semestre ${sem.semestre}</h2>`;
    sem.ramos.forEach(ramo => {
        const ramoDiv = document.createElement("div");
        ramoDiv.className = "ramo";
        ramoDiv.innerHTML = `
            <strong>${ramo.nombre}</strong><br>
            Créditos: ${ramo.creditos}<br>
            <em>${ramo.descripcion}</em><br>
            Nota: ${ramo.nota ?? "—"}<br>
            <small>Prerrequisitos: ${ramo.prerrequisitos.length ? ramo.prerrequisitos.join(", ") : "Ninguno"}</small>
        `;
        div.appendChild(ramoDiv);
    });
    container.appendChild(div);
});
